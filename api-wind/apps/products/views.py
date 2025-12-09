from rest_framework import viewsets, filters
from rest_framework.decorators import action
from rest_framework.response import Response
from .models import Product
from .serializers import ProductSerializer


class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    filter_backends = [filters.SearchFilter, filters.OrderingFilter]
    search_fields = ['name', 'sku', 'description']
    ordering_fields = ['name', 'price', 'stock', 'created_at']
    ordering = ['-created_at']

    @action(detail=False, methods=['get'])
    def low_stock(self, request):
        low_stock_products = self.queryset.filter(stock__lt=10, is_active=True)
        serializer = self.get_serializer(low_stock_products, many=True)
        return Response(serializer.data)