from shop.models import Product, Category
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework import permissions
from .serializers import ProductSerializer, CategorySerializer
from rest_framework.generics import (
    ListAPIView, RetrieveAPIView)


class ProductAPIView(ListAPIView):
    queryset = Product.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    parser_classes = (MultiPartParser, FormParser)
    serializer_class = ProductSerializer
    lookup_field = 'slug'


class ProductInCategoryView(ListAPIView):
    serializer_class = ProductSerializer

    def get_queryset(self):
        slug = self.kwargs['slug']
        return Product.objects.filter(category=slug)


class CategoryAPIView(ListAPIView):
    queryset = Category.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    parser_classes = (MultiPartParser, FormParser)

    serializer_class = CategorySerializer
    lookup_field = 'slug'


# class ProductAPIViewset(viewsets.ModelViewSet):
#     queryset = Product.objects.all()
#     permission_classes = [
#         permissions.AllowAny
#     ]
#     parser_classes = (MultiPartParser, FormParser)

#     serializer_class = ProductSerializer
#     lookup_field = 'slug'


# class CategoryAPIViewset(viewsets.ModelViewSet):
#     queryset = Category.objects.all()
#     permission_classes = [
#         permissions.AllowAny
#     ]
#     parser_classes = (MultiPartParser, FormParser)

#     serializer_class = CategorySerializer
#     lookup_field = 'slug'
