from checkmate.constants import USERS
from classes.routing import AppConstant
from .views import UserAPIView

APP_NAME = USERS.namespace

USER = AppConstant("user/", UserAPIView.as_view(), "user")

routes = [USER]