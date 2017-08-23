from django.shortcuts import render, redirect
from models import *
from django.contrib import messages


def test(request):
    print ">"*20, "login views"

def index(request):
    return render(request, "car_app/dashboard.html") 

def addCar(request):
    return render(request, "car_app/addCar.html") 