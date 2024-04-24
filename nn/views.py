from django.shortcuts import render
from decouple import config

def showmap(request):
    return render(request, "nn/showmap.html", {'api_href': config("API_HREF")})
