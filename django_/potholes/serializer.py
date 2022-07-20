from rest_framework import serializers

from potholes.models import Pothole
class PotholesSerializer(serializers.ModelSerializer):
    class Meta:
        model=Pothole
        fields = ("id","email","picture","latitude","longitude","city","country","road","visibility")
