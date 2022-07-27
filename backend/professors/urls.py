from django.urls import URLPattern, path, include
from professors import views



urlpatterns = [
    path('', views.get_all_professors),
    path('all/', views.user_professors),
]