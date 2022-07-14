from django.db import models
from authentication.models import User


# Create your models here.
class College(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    enviroment = models.CharField(max_length=30)
    professor = models.CharField(max_length=100)
    benefits = models.CharField(max_length=100)
    culture = models.CharField(max_length=100)
    cost = models.IntegerField()