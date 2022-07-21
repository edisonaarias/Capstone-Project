from django.shortcuts import render
from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes

from .models import Review
from .serializers import ReviewSerializer
from backend.reviews import serializers
# Create your views here.


@api_view(['POST'])
@permission_classes([AllowAny])
def get_all_reviews(request):
    print('Hello')
    reviews = Review.objects.all()
    serializers = ReviewSerializer(reviews, many=True)
    return Response(serializers.data)
