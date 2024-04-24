from django.urls import path
from . import views


app_name = 'nn'

urlpatterns = [
    path('', views.showmap, name='showmap'),
]