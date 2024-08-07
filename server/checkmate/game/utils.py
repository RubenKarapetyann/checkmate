from rest_framework.authtoken.models import Token
from channels.db import database_sync_to_async
from django.contrib.auth.models import AnonymousUser
from users.models import User

@database_sync_to_async
def get_user(token_value):
    try:
        token = Token.objects.get(key=token_value)
        return token.user
    except Token.DoesNotExist:
        return AnonymousUser()
    
    
def userIsAuthenticated(user):
    return isinstance(user, User)