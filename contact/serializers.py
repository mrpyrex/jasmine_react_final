from rest_framework import serializers
from contact.models import Contact


class ContactSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contact
        fields = '__all__'

    # def save(self):

    #     name = self.validated_data['name']
    #     email = self.validated_data['email']
    #     message = self.validated_data['message']

    #     contact = Contact(name=name, email=email,
    #                       message=message)
    #     contact.save()
