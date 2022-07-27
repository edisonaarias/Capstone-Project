from django.db import models
from authentication.models import User



# Create your models here.
class Review(models.Model):
    reviews = models.CharField(max_length=100)
