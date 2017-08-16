from django.shortcuts import render, HttpResponse, redirect
from models import *

# def test(request):
#     print "/\/\/\/\/\/ Create your views here."

def index(request):
    return render(request, "login_app/index.html") 

def register(request):
    response = 'placeholder to later process form input to register a new user'
    return HttpResponse(response)

def login(request):
    response = 'placeholder to later process form input to login a registered user'
    return HttpResponse(response)

def success(request):
    response = 'placeholder to later display a success message'
    return HttpResponse(response)