from django.contrib import admin
from django.urls import path, include
from .constants import apps
from constants.api import API, V1

PREFIX = f'{API}/{V1}/'

urlpatterns = [
    path('admin/', admin.site.urls),
    path(PREFIX + 'auth/', include('djoser.urls.authtoken'))
] + [path(PREFIX + app.path, include(app.url, namespace=app.namespace)) for app in apps]
