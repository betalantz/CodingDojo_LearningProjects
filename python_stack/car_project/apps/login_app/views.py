from django.shortcuts import render, redirect
from models import *
from django.contrib import messages


def test(request):
    print ">"*20, "login views"

def index(request):
    return render(request, "login_app/index.html") 

def register(request):
    print request.POST
    results = User.objects.regVal(request.POST)
    if results['status']==True:
        for error in results['errors']:
            messages.error(request, error)
        return redirect('/')
    print results
    messages.success(request, 'You registered successfully! Please log in.')
    return redirect('/')
