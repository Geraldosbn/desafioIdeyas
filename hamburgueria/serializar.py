from dataclasses import fields
from pyexpat import model
from rest_framework import serializers
from hamburgueria.models import Cardapio

class cardapioSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cardapio
        fields = ['id','lanche','valor']
        