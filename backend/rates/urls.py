from django.urls import path, include
from rates import views



urlpatterns = [
    path('', views.get_all_rates),
    path('all/', views.user_rates),
]