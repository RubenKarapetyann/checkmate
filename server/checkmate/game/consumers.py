from channels.generic.websocket import WebsocketConsumer
from .models import Lobby, Game
from users.models import User
from .utils import userIsAuthenticated

class GameConsumer(WebsocketConsumer):
    def connect(self):
        self.accept()
        
    def disconnect(self, close_code):
        pass
    
    def receive(self, text_data):
        self.send(text_data=text_data)
        
        
class LobbyConsumer(WebsocketConsumer):
    def connect(self):
        user: User = self.scope["user"]
        
        if not userIsAuthenticated(user):
            # login requared is temporary
            return self.close(code=4000)
        
        if user.game.exists():
            self.close(code=4500)
             
        self.accept()
        self.send(f"user {user.id} connected")
        
        try:
            if user.lobby:
                return self.send(f"user is in lobby #{user.lobby.id}")
        except Lobby.DoesNotExist:
            lobbies = Lobby.objects.all()
            if lobbies.exists():
                lobby = lobbies[0]
                player = lobby.player
                game = Game.objects.create()
                game.players.add(user, player)
                game.save()
                lobby.delete()
            else:
                Lobby.objects.create(player=user)
        

        
    def disconnect(self, close_code):
        try:
            if close_code == 4000:
                return
            
            user: User = self.scope["user"]
            lobby: Lobby = user.lobby
            lobby.delete()
        except Lobby.DoesNotExist:
            pass

