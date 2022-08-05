from django.db import models

class Professor(models.Model):
    name = models.CharField(max_length=50)