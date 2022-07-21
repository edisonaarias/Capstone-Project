from django.urls import path, include
from reviews import views



urlspatterns = [
    path('', views.get_all_reviews),
    path('all', views.user_reviews),
]