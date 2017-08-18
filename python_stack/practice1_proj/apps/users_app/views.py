from django.shortcuts import render, HttpResponse, redirect
from models import *
from django.contrib import messages

def index(request):
    return render (request, 'users_app/index.html')

def login(request):
    results = User.objects.login_validator(request.POST)
    if results['status']==False:
        for error in results['errors']:
            messages.error(request, error)
        return redirect('/')
    messages.success(request, 'Login successful')
    return redirect('/')

