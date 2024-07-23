from classes.routing import MainConstant

AUTH = MainConstant("auth/", "authentication.urls", "auth")

apps = [AUTH]