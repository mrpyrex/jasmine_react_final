from contact.models import Contact
from rest_framework import viewsets, permissions
from .serializers import ContactSerializer


class ContactAPIViewset(viewsets.ModelViewSet):
    queryset = Contact.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = ContactSerializer
