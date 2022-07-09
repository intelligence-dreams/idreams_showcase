from email.policy import default
from django.db import models

# Create your models here.
def upload_to(instance,filename):
    return 'posts/{filename}'.format(filename=filename)

class Driver(models.Model):
    name = models.CharField(max_length=50)
    picture = models.ImageField(("Image"),upload_to=upload_to,default="posts/default.jpg")
    db = models.DateField(max_length=40)
    sex = models.CharField(max_length=50)
    adresse = models.CharField(max_length=100)
    licenseno = models.CharField(max_length=100)
    def __str__(self):
        return self.name