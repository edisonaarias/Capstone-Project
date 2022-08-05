from django.db import models
from authentication.models import User
from professors.models import Professor


# Create your models here.
class Rate(models.Model):
    Rates = models.CharField(max_length=100)
    professor = models.ForeignKey(Professor, on_delete=models.CASCADE, null=True)
    name = models.CharField(max_length=50)