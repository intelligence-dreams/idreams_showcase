from django.shortcuts import render
from matplotlib.pyplot import cla
from rest_framework import generics

from potholes.models import Pothole
from potholes.serializer import PotholesSerializer
# Create your views here.
class PotholeList(generics.ListCreateAPIView):
    queryset = Pothole.objects.all()
    serializer_class = PotholesSerializer

class PotholeDetail(generics.RetrieveDestroyAPIView):
    queryset = Pothole.objects.all()
    serializer_class = PotholesSerializer

class PotholeEdite(generics.UpdateAPIView):
    queryset = Pothole.objects.all()
    serializer_class = PotholesSerializer

class PotholeDelete(generics.RetrieveDestroyAPIView):
    queryset = Pothole.objects.all()
    serializer_class = PotholesSerializer