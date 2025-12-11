from django.db import models


class Product(models.Model):
    name = models.CharField(max_length=200, verbose_name='Nome')
    description = models.TextField(blank=True, null=True, verbose_name='Descrição')
    price = models.DecimalField(max_digits=10, decimal_places=2, verbose_name='Preço')
    stock = models.IntegerField(default=0, verbose_name='Estoque')
    sku = models.CharField(max_length=50, unique=True, verbose_name='SKU')
    is_active = models.BooleanField(default=True, verbose_name='Ativo')
    created_at = models.DateTimeField(auto_now_add=True, verbose_name='Criado em')
    updated_at = models.DateTimeField(auto_now=True, verbose_name='Atualizado em')

    class Meta:
        db_table = 'products'
        verbose_name = 'Produto'
        verbose_name_plural = 'Produtos'
        ordering = ['-created_at']

    def __str__(self):
        return self.name