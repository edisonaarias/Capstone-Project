import re
from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes

from .models import College
from .serializers import CollegeSerializer
# Create your views here.


@api_view(['GET','POST'])
@permission_classes([AllowAny])
def get_all_colleges(request):
    print('weeeeeeeee')
    if request.method == 'GET':
        colleges = College.objects.all()
        serializier = CollegeSerializer(colleges, many=True)
        return Response(serializier.data)
    
    elif request.method == 'POST':
        serializier = CollegeSerializer(data=request.data)
        serializier.is_valid(raise_exception=True)
        serializier.save()
        return Response(serializier.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated])
def user_colleges(request):
        print(
            'User ', f"{request.user.id} {request.user.email} {request.user.username}")
        if request.method == 'POST':
            serializer = CollegeSerializer(data=request.data)
            if serializer.is_valid():
                serializer.save(user=request.user)
                return Response(serializer.data, status=status.HTTP_201_CREATED)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        elif request.method == 'GET':
            colleges = College.objects.filter(user_id=request.user.id)
            serializer = CollegeSerializer(colleges, many=True)
            return Response(serializer.data)


