from django.shortcuts import render IsAutherticated, AllowAny 
from rest_framework.decorators import api_view, permission_classes

import 
from .models import College
from .serializers import CollegeSerializer
# Create your views here.





@api_view(['GET'])
@permission_classes([AllowAny])
def get_all_students(request):
    colleges = college.objects.all()
    serializier = CollegeSerializer(colleges, many=True)
    return Response(serializier.data)