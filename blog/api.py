from blog.models import Post
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework import viewsets, permissions
from .serializers import PostSerializer


class PostAPIViewset(viewsets.ModelViewSet):
    queryset = Post.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    parser_classes = (MultiPartParser, FormParser)

    serializer_class = PostSerializer
