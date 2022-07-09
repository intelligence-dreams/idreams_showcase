from django.shortcuts import render

from rest_framework import generics

from pothole.models import Pothole
from pothole.serializer import PotholeSerializer

# Create your views here.
class PotholeList(generics.ListCreateAPIView):
    queryset = Pothole.objects.all()
    serializer_class = PotholeSerializer

class PoltholeDetail(generics.RetrieveDestroyAPIView):
    queryset = Pothole.objects.all()
    serializer_class =  PotholeSerializer

class PotholeEdite(generics.UpdateAPIView):
    queryset = Pothole.objects.all()
    serializer_class = PotholeSerializer

class PotholeDelete(generics.RetrieveDestroyAPIView):
    queryset = Pothole.objects.all()
    serializer_class = PotholeSerializer