from rest_framework import serializers
from .models import College

# <<<<<<<<<<<<<<<<< EXAMPLE FOR STARTER CODE USE <<<<<<<<<<<<<<<<<


class CollegeSerializer(serializers.ModelSerializer):
    class Meta:
        model = College
        fields = ['id', 'University','user','enviroment','professor','benefits','culture','programs','cost', 'weather_type','major_type']
        depth = 1

  