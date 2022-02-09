from rest_framework import viewsets
from hamburgueria.models import Cardapio
from hamburgueria.serializar import cardapioSerializer

class cardapioViewSet (viewsets.ModelViewSet):
    queryset = Cardapio.objects.all()
    serializer_class = cardapioSerializer
    