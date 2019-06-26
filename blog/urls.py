from rest_framework.routers import DefaultRouter
from .api import PostAPIViewset

router = DefaultRouter()
router.register('', PostAPIViewset, basename='blog')
urlpatterns = router.urls
