from django.contrib import admin
from django.urls import path, include
from .constants import apps
from constants.api import API, V1
from django.conf import settings
from django.conf.urls.static import static

PREFIX = f'{API}/{V1}/'

urlpatterns = [
    path('admin/', admin.site.urls),
    path(PREFIX + 'auth/', include('djoser.urls.authtoken'))
] + [path(PREFIX + app.path, include(app.url, namespace=app.namespace)) for app in apps] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)