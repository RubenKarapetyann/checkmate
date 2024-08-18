from channels.generic.websocket import AsyncJsonWebsocketConsumer
from ..mixins import SocketLoginRequiredMixin
from asgiref.sync import sync_to_async
from ..models import Game
from websocket.utils import group_name_creater
from websocket.parsers import sendParser
import json
from websocket.actions import Actions
from ..chess.constants import WHITE, BLACK
from django.db.models import Q, F
from ..wbserializers import from_db_objects_to_classes_serializer
from ..chess.figures.base import FigureBase
from ..wbserializers import MatrixSerializer
from users.models import User
from websocket.utils import type_creater
from ..chess.game import Chess
from ..chess.constants import CHECKMATE, STALEMATE

class GameConsumer(SocketLoginRequiredMixin, AsyncJsonWebsocketConsumer):
    async def connect(self):
        try:
            game_id = self.scope["url_route"]["kwargs"]["game_id"]
            user = self.scope["user"]
            self.group_name = group_name_creater("game", game_id)
            game = await sync_to_async(Game.objects.get)(pk=game_id)
            players = await sync_to_async(game.players.all)()
            matrix = json.JSONDecoder(object_hook=from_db_objects_to_classes_serializer).decode(game.matrix)
            opposite_player = await sync_to_async(players.get)(~Q(id=user.id))
            
            if user.id not in [player.id async for player in players]:
                await self.close(code=4150)
            
            await self.channel_layer.group_add(
                self.group_name,
                self.channel_name
            )
            
            await self.accept()
            
            color = WHITE
            if game.black_id == user.id:
                color = BLACK
                
            await self.send(sendParser(Actions.GAME_ACCEPTED, {"matrix" : matrix, "color" : color, "moves_count" : game.moves_count}))
        except Game.DoesNotExist:
            print("game is not created")
            await self.close(code=4100)

        
    async def disconnect(self, close_code):
        await self.channel_layer.group_discard(
            self.group_name , 
            self.channel_name 
        )

    
    async def receive_json(self, content):
        action = content["action"]
        data = content["data"]
        
        user: User = self.scope["user"]
        
        # this is temporary just to avoid a bug, later we will get the game id from client
        game_id = await sync_to_async(lambda: user.game.id)()
        game: Game = await sync_to_async(Game.objects.get)(pk=game_id)
        self.group_name = group_name_creater("game", game.id)
        
        matrix = json.JSONDecoder(object_hook=from_db_objects_to_classes_serializer).decode(game.matrix)
        
        chess = Chess(game.moves_count, game.mode, matrix, game.white_id, game.black_id)
        
        match action:
            case Actions.GET_MOVES:
                row, column = ( data["row"], data["column"] )
                moves, number, id = chess.get_moves(row, column)
                
                await self.send(sendParser(Actions.GET_MOVES, {
                    "row": row,
                    "column": column,
                    "number": number,
                    "id": id,
                    "moves": moves
                }))
            case Actions.FIGURE_MOVE:
                new_matrix, game_state = chess.move(data["row"], data["column"], data["to_row"], data["to_column"])
        
                game.matrix = json.dumps(new_matrix, cls=MatrixSerializer)
                game.moves_count = F("moves_count") + 1
                await sync_to_async(game.save)()
                await sync_to_async(game.refresh_from_db)()
                await self.channel_layer.group_send(
                    self.group_name, 
                    type_creater("figure_move", {
                        "matrix" : new_matrix,
                        "moves_count" : game.moves_count,
                        "game_state" : game_state
                    })
                )
                    
                if game_state in [STALEMATE, CHECKMATE]:
                    await sync_to_async(game.delete)()
                
    
    async def figure_move(self, content, **kwargs):
        data = content["data"]
        
        await self.send(sendParser(Actions.FIGURE_MOVE, {
            "matrix" : data["matrix"],
            "moves_count" : data["moves_count"]
        }))
        
        if data["game_state"] in [STALEMATE, CHECKMATE]:
            await self.close()
        