from django.urls import path
from rest_framework_simplejwt.views TokenObtainPairView, TokenRefreshView
from .view import RegisterView

urlpatterns = [
    path('login/', TokenObtainPairView(), name='token_obtain_pair'),
    path('login/refresh/', TokenObtainPairView(), name='token_refresh'),
    path('register/', RegisterView(), name='token_obtain_pair'),
]