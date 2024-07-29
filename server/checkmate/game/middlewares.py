from django.contrib.auth.models import AnonymousUser
from .utils import get_user

class TokenAuthMiddleware:
    def __init__(self, app):
        self.app = app

    async def __call__(self, scope, receive, send):
        try:
            [token_key, token_value] = scope["query_string"].decode().split("=")

            if token_key != 'token':
                raise
            
            scope['user'] = await get_user(token_value)
        except:
            scope['user'] = AnonymousUser()
            
        return await self.app(scope, receive, send)
        