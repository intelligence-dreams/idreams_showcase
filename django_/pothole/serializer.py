from dataclasses import fields
from rest_framework import routers, serializers, viewsets
from .models import Pothole


class PotholeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Pothole
        fields = ("id","name","picture")