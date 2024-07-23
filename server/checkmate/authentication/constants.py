from checkmate.constants import AUTH
from .views import test
from classes.routing import AppConstant

APP_NAME = AUTH.namespace

TEST = AppConstant("test/", test, "test")

routes = [TEST]