from .constants import APP_NAME, routes
from django.urls import path

app_name = APP_NAME

urlpatterns = [path(route.path, route.view, name=route.name) for route in routes]
