from rest_framework.routers import DefaultRouter
from .api import ProductAPIViewset, CategoryAPIViewset

router = DefaultRouter()
router.register('', ProductAPIViewset, basename='shop')
urlpatterns = router.urls
