from rest_framework import serializers
from .models import Rate


class RatesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Rate
        fields = ['id','Rates']
        depth = 1
