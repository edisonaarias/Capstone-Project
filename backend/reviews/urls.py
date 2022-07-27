from django.urls import path, include
from . import views



urlpatterns = [
    path('', views.get_all_reviews),
    path('<int:pk>/', views.user_reviews),
]