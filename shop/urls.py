from django.urls import path
from .api import ProductAPIView, CategoryAPIView, ProductInCategoryView, ProductDetailAPIView


urlpatterns = [

    path('', ProductAPIView.as_view()),
    path('<slug>', ProductDetailAPIView.as_view()),
    path('categories/', CategoryAPIView.as_view()),
    path('categories/<slug>', ProductInCategoryView.as_view())
]
