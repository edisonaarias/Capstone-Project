from rest_framework import serializers
from .models import Rate




class RateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Rate
        fields = ['id','Rates','professor_id',"name"]
        depth = 1
        professor_id = serializers.IntegerField(write_only=True)
