from shop.models import Product, Category
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework import viewsets, permissions
from .serializers import ProductSerializer, CategorySerializer


class ProductAPIViewset(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    parser_classes = (MultiPartParser, FormParser)

    serializer_class = ProductSerializer
    lookup_field = 'slug'


class CategoryAPIViewset(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    parser_classes = (MultiPartParser, FormParser)

    serializer_class = CategorySerializer
    lookup_field = 'slug'
