from rest_framework import viewsets, filters
from rest_framework.decorators import action
from rest_framework.response import Response
from .models import Client
from .serializers import ClientSerializer


class ClientViewSet(viewsets.ModelViewSet):
    queryset = Client.objects.all()
    serializer_class = ClientSerializer
    filter_backends = [filters.SearchFilter, filters.OrderingFilter]
    search_fields = ['name', 'email', 'document']
    ordering_fields = ['name', 'created_at']
    ordering = ['-created_at']

    @action(detail=False, methods=['get'])
    def active(self, request):
        active_clients = self.queryset.filter(is_active=True)
        serializer = self.get_serializer(active_clients, many=True)
        return Response(serializer.data)