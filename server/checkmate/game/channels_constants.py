from classes.routing import SocketConstant
from .consumers import GameConsumer

GAME = SocketConstant("game/", GameConsumer.as_asgi())

wsRoutes = [GAME]