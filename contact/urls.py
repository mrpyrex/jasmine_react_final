from rest_framework.routers import DefaultRouter
from .api import ContactAPIViewset

router = DefaultRouter()
router.register('', ContactAPIViewset, basename='contact')
urlpatterns = router.urls
