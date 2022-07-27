from django.db import models


# Create your models here.
class Professor(models.Model):
    name = models.CharField(max_length=100)
    class_type = models.CharField(max_length=100)
    message = models.CharField(max_length=100)
    
    
