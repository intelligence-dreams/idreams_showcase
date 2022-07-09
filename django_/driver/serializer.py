from dataclasses import fields
from rest_framework import routers, serializers, viewsets
from .models import Driver


class DriverSerializer(serializers.ModelSerializer):
    class Meta:
        model = Driver
        fields = ("id","name","picture","db","sex","adresse","licenseno")