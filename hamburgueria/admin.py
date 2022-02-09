from django.contrib import admin
from hamburgueria.models import Cardapio

class lanche(admin.ModelAdmin):
    list_display = ('id','lanche','valor')
    list_display_links = ('valor',)
    search_fields = ('lanche',)
    
admin.site.register(Cardapio,lanche)

