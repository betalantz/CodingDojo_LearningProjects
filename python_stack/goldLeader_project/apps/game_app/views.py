from django.shortcuts import render, HttpResponse, redirect
from models import *
from django.contrib import messages

def test(request):
    print "+++++++++ Create game views here."
