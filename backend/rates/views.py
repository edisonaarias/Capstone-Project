from django.shortcuts import render
from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes

from .models import Rate
from .serializers import RatesSerializer
# Create your views here.

@api_view(['POST'])
@permission_classes([AllowAny])
def get_all_rates(request):
    print('Hello')
    rates = Rate.objects.all()
    serializier = RatesSerializer(rates, many=True)
    return Response(serializier.data)