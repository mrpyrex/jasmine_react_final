from gallery.models import Pic
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework import viewsets, permissions
from .serializers import PicSerializer


class PicAPIViewset(viewsets.ModelViewSet):
    queryset = Pic.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    parser_classes = (MultiPartParser, FormParser)
    serializer_class = PicSerializer
