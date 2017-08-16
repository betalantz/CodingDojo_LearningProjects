from django.shortcuts import render, HttpResponse, redirect
from models import *
from django.contrib import messages

# def test(request):
#     print "/\/\/\/\/\/ Create your views here."

def index(request):
    return render(request, "login_app/index.html") 

def register(request):
    errors = User.objects.basic_validator(request.POST)
    if len(errors):
        for tag, error in errors.iteritems():
            messages.error(request, error, extra_tags=tag)
        return redirect('/index')
    else:
        user = User.objects.get(id = id)
        user.name = request.POST['name']
        user.desc = request.POST['desc']
        user.save()
        return redirect('/success')

def login(request):
    response = 'placeholder to later process form input to login a registered user'
    return HttpResponse(response)

def success(request):
    response = 'placeholder to later display a success message'
    return HttpResponse(response)