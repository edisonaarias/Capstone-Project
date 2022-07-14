from rest_framework import serializers
from .models import College

# <<<<<<<<<<<<<<<<< EXAMPLE FOR STARTER CODE USE <<<<<<<<<<<<<<<<<


class CarSerializer(serializers.ModelSerializer):
    class Meta:
        model = College
        fields = ['id', 'user','enviroment','professor','benefits','culture','cost']
        depth = 1

    # user = models.ForeignKey(User, on_delete=models.CASCADE)
    # enviroment = models.CharField(max_length=30)
    # professor = models.CharField(max_length=100)
    # benefits = models.CharField(max_length=100)
    # culture = models.CharField(max_length=100)
    # cost = models.IntegerField()