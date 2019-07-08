from django.urls import path
from .api import ProductAPIView, CategoryAPIView, ProductInCategoryView


urlpatterns = [

    path('', ProductAPIView.as_view()),
    path('categories/', CategoryAPIView.as_view()),
    path('category-filter/<slug>', ProductInCategoryView.as_view())
]


# from rest_framework.routers import DefaultRouter
# ProductAPIViewset, CategoryAPIViewset
# router = DefaultRouter()
# router.register('', ProductAPIViewset, basename='shop')
# urlpatterns = router.urls
