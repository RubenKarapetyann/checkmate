from classes.routing import SocketConstant
from .consumers import GameConsumer, LobbyConsumer

GAME = SocketConstant("game/<int:game_id>/", GameConsumer.as_asgi())
LOBBY = SocketConstant("lobby/", LobbyConsumer.as_asgi())

wsRoutes = [GAME, LOBBY]