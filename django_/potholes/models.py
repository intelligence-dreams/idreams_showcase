from distutils.command.upload import upload
import email
from email.policy import default
# from importlib.util import module_for_loader
from django.db import models
# from pytz import country_names

def upload_to(instance,filename):
    return 'potholes/{filename}'.format(filename=filename)
# Create your models here.
class Pothole(models.Model):
    email = models.EmailField()
    picture = models.ImageField(("Image"),upload_to=upload_to,default='potholes/defaults.png')
    latitude = models.CharField(max_length=70)
    longitude = models.CharField(max_length=70)
    city = models.CharField(max_length=70)
    country = models.CharField(max_length=70)
    road = models.CharField(max_length=70)
    visibility = models.BooleanField(default=True)
    def __str__(self):
        return self.country