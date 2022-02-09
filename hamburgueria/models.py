from unittest.util import _MAX_LENGTH
from django.db import models

# Create your models here.

class Cardapio(models.Model):
    lanche = models.CharField(max_length=50)
    valor = models.DecimalField(max_digits=5, decimal_places=2)
    
    def __str__(self):
        return self.lanche