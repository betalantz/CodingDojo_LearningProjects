from django.shortcuts import render, HttpResponse, redirect
from models import *

def test(request):
    print "/\/\/\/\/\/ Create your views here."

def index(request):
    response = 'placeholder to later display the home page'
    return HttpResponse(response)

def register(request):
    response = 'placeholder to later process form input to register a new user'
    return HttpResponse(response)

def login(request):
    response = 'placeholder to later process form input to login a registered user'
    return HttpResponse(response)

def success(request):
    response = 'placeholder to later display a success message'
    return HttpResponse(response)