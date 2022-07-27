from rest_framework import serializers
from .models import Professor




class ProfessorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Professor
        fields = ['id', 'name', 'class_type', 'message']