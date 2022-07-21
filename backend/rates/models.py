from django.db import models
from authentication.models import User



# Create your models here.
class Rate(models.Model):
    Rates = models.CharField(max_length=100)