from channels.generic.websocket import AsyncJsonWebsocketConsumer
from ..models import Lobby, Game
from users.models import User
from ..utils import userIsAuthenticated
from asgiref.sync import sync_to_async
from websocket.actions import GAME_FOUND
from websocket.utils import action_creater, type_creater, group_name_creater
from ..chess.utils import get_initial_matrix
from ..wbserializers import MatrixSerializer
import json

class LobbyConsumer(AsyncJsonWebsocketConsumer):
    async def connect(self):
        user: User = self.scope["user"]
        
        if not userIsAuthenticated(user):
            # login requared is temporary
            return await self.close(code=4000)
        
        if await sync_to_async(user.game.exists)():
            return await self.close(code=4500)
             
        await self.accept()
        
        try:
            if await sync_to_async(lambda : user.lobby)():
                return
        except Lobby.DoesNotExist:
            lobbies = await sync_to_async(Lobby.objects.all)()
            if await sync_to_async(lobbies.exists)():
                lobby = await sync_to_async(lambda : lobbies[0])()
                self.group_name = group_name_creater("lobby", lobby.pk)
                player = await sync_to_async(lambda : lobby.player)()
                await self.channel_layer.group_add(
                    self.group_name,
                    self.channel_name
                )
                game = await sync_to_async(Game.objects.create)(matrix=json.dumps(get_initial_matrix(), cls=MatrixSerializer))
                await sync_to_async(game.players.add)(user, player)
                await sync_to_async(game.save)()
                await self.channel_layer.group_send(
                    self.group_name, 
                    type_creater("game_found", {
                        "game_id" : game.id
                    })
                )
                await sync_to_async(lobby.delete)()
            else:
                lobby: Lobby = await sync_to_async(Lobby.objects.create)(player=user)
                self.group_name = group_name_creater("lobby", lobby.pk)
                await self.channel_layer.group_add(
                    self.group_name,
                    self.channel_name
                )
        
    async def game_found(self, content, **kwargs):
        data = content["data"]
        
        return await self.send_json(action_creater(GAME_FOUND, {
            "game_id" : data["game_id"]
        }))
        
        
    async def disconnect(self, close_code):
        try:
            if close_code == 4000:
                return
            
            user: User = self.scope["user"]
            if not userIsAuthenticated(user):
                # login requared is temporary
                return await self.close(code=4000)
            
            lobby: Lobby = await sync_to_async(lambda : user.lobby)()
            self.group_name = group_name_creater("lobby", lobby.pk)
            await self.channel_layer.group_discard(
                self.group_name , 
                self.channel_name 
            )
            await sync_to_async(lobby.delete)()
        except Lobby.DoesNotExist:
            pass

