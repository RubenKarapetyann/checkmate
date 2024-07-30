from django.urls import path
from .channels_constants import wsRoutes
from constants.api import API, V1, WS

PREFIX = f"{WS}/{API}/{V1}/"

websocket_urlpatterns = [path(PREFIX + route.path, route.view) for route in wsRoutes]
