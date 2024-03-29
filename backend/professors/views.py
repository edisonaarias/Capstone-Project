from django.shortcuts import render
from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes

from .models import Professor, Professor
from .serializers import ProfessorSerializer, ProfessorSerializer
# Create your views here.


@api_view(['GET'])
@permission_classes([AllowAny])
def get_all_professors(request):
    print('hello')
    professors = Professor.objects.all()
    serializier = ProfessorSerializer(professors, many=True)
    return Response(serializier.data)



@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated])
def user_professors(request):
    print(
            'User ', f"{request.user.id} {request.user.email} {request.user.username}")
    if request.method == 'POST':
            serializer = ProfessorSerializer(data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data, status=status.HTTP_201_CREATED)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'GET':
            professors = Professor.objects.filter(user_id=request.user.id)
            serializer = ProfessorSerializer(professors, many=True)
            return Response(serializer.data)