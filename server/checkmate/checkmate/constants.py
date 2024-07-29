from classes.routing import MainConstant

AUTH = MainConstant("auth/", "authentication.urls", "auth")
USERS = MainConstant("users/", "users.urls", "users")
GAME = MainConstant("game/", "game.urls", "game")

apps = [AUTH, USERS, GAME]