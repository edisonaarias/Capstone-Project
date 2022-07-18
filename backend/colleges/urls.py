from django.urls import path, include
from colleges import views

# <<<<<<<<<<<<<<<<< EXAMPLE FOR STARTER CODE USE <<<<<<<<<<<<<<<<<

urlpatterns = [
    path('', views.get_all_colleges),
    path('all/', views.user_colleges),
]
