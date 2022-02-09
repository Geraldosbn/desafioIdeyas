
from django.contrib import admin
from django.urls import path, include
from hamburgueria.views import cardapioViewSet
from rest_framework import routers

router = routers.DefaultRouter()
router.register(r'cardapio',cardapioViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include(router.urls)),
]
