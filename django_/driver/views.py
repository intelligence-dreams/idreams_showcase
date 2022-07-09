from django.shortcuts import render

from rest_framework import generics

from driver.models import Driver
from driver.serializer import DriverSerializer

# Create your views here.
class DriverList(generics.ListCreateAPIView):
    queryset = Driver.objects.all()
    serializer_class = DriverSerializer

class DriverDetail(generics.RetrieveDestroyAPIView):
    queryset = Driver.objects.all()
    serializer_class =  DriverSerializer

class DriverEdite(generics.UpdateAPIView):
    queryset = Driver.objects.all()
    serializer_class = DriverSerializer

class DriverDelete(generics.RetrieveDestroyAPIView):
    queryset = Driver.objects.all()
    serializer_class = DriverSerializer