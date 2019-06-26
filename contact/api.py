from contact.models import Contact
# from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework import viewsets, permissions
from .serializers import ContactSerializer


class ContactAPIViewset(viewsets.ModelViewSet):
    queryset = Contact.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    # parser_classes = (MultiPartParser, FormParser)
    serializer_class = ContactSerializer
