from django.db import models

# Create your models here.
class Client(models.Model):
    name = models.CharField(max_length=200, verbose_name='Nome')
    email = models.EmailField(unique=True, verbose_name='E-mail')
    phone = models.CharField(max_length=20, verbose_name='Telefone')
    document = models.CharField(max_length=20, unique=True, verbose_name='CPF/CNPJ')
    address = models.TextField(blank=True, null=True, verbose_name='Endereço')
    is_active = models.BooleanField(default=True, verbose_name='Ativo')
    created_at = models.DateTimeField(auto_now_add=True, verbose_name='Criado em')
    updated_at = models.DateTimeField(auto_now=True, verbose_name='Atualizado em')

    class Meta:
        db_table = 'clients'
        verbose_name = 'Cliente'
        verbose_name_plural = 'Clientes'
        ordering = ['-created_at']

    def __str__(self):
        return self.name