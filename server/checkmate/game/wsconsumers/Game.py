from channels.generic.websocket import AsyncJsonWebsocketConsumer
from ..mixins import SocketLoginRequiredMixin
from asgiref.sync import sync_to_async
from ..models import Game
from websocket.utils import group_name_creater
from websocket.parsers import sendParser
import json
from websocket.actions import GAME_ACCEPTED, GET_MOVES
from ..chess.constants import WHITE, BLACK
from django.db.models import Q
from ..wbserializers import from_db_objects_to_classes_serializer
from ..chess.figures.base import FigureBase

class GameConsumer(SocketLoginRequiredMixin, AsyncJsonWebsocketConsumer):
    async def connect(self):
        try:
            game_id = self.scope["url_route"]["kwargs"]["game_id"]
            user = self.scope["user"]
            self.group_name = group_name_creater("game", game_id)
            game = await sync_to_async(Game.objects.get)(pk=game_id)
            players = await sync_to_async(game.players.all)()
            matrix = json.loads(game.matrix)
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
                
            await self.send(sendParser(GAME_ACCEPTED, {"matrix" : matrix, "color" : color}))
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
                
        user = self.scope["user"]
        
        game = await sync_to_async(lambda: user.game)()
        
        matrix = json.JSONDecoder(object_hook=from_db_objects_to_classes_serializer).decode(game.matrix)
        
        match action:
            case GET_MOVES:
                figure: FigureBase = matrix[data["row"]][data["column"]]
                figure.matrix = matrix
                figure.get_verified_moves()
                
                await self.send(sendParser(GET_MOVES, {
                    "row": data["row"],
                    "column": data["column"],
                    "number": figure.number,
                    "id": data["figure_id"],
                    "moves": figure.moves
                }))
        
        