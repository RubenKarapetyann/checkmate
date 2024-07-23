from classes.routing import MainConstant

AUTH = MainConstant("auth/", "authentication.urls", "auth")
USERS = MainConstant("users/", "users.urls", "users")

apps = [AUTH, USERS]