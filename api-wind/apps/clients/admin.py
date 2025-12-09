from django.contrib import admin
from .models import Client


@admin.register(Client)
class ClientAdmin(admin.ModelAdmin):
    list_display = ['name', 'email', 'phone', 'document', 'is_active', 'created_at']
    list_filter = ['is_active', 'created_at']
    search_fields = ['name', 'email', 'document']
    list_per_page = 20
    date_hierarchy = 'created_at'
    readonly_fields = ['created_at', 'updated_at']