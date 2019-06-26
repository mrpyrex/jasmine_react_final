from rest_framework import serializers
from gallery.models import Pic


class PicSerializer(serializers.ModelSerializer):
    class Meta:
        model = Pic
        fields = '__all__'
