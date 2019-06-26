from rest_framework.routers import DefaultRouter
from .api import PicAPIViewset

router = DefaultRouter()
router.register('', PicAPIViewset, basename='gallery')
urlpatterns = router.urls
