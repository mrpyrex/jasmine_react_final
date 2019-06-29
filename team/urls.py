from rest_framework.routers import DefaultRouter
from .api import TeamAPIViewset

router = DefaultRouter()
router.register('', TeamAPIViewset, basename='team')
urlpatterns = router.urls
