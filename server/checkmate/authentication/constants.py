from checkmate.constants import AUTH
from .views import TestAPIView
from classes.routing import AppConstant

APP_NAME = AUTH.namespace

TEST = AppConstant("test/", TestAPIView.as_view(), "test")

routes = [TEST]