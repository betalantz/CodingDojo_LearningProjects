from django.shortcuts import render, HttpResponse, redirect
from models import *
from django.contrib import messages

def test(request):
    print "/\/\/\/\/\/ Create user views here."

def index(request):
    return render(request, "login_app/index.html") 

def register(request):
    results = User.objects.register_validator(request.POST)
    if results['status']==False:
        for error in results['errors']:
            messages.error(request, error)
        return redirect('/index')
    user = User.objects.createUser(request.POST)
    messages.success(request, 'You registered successfully! Please log in.')
    return redirect('/')

def login(request):
    results = User.objects.login_validator(request.POST)
    if results['status']==False:
        for error in results['errors']:
            messages.error(request, error)
        return redirect('/index')
    # store a user auth token in sessions to allow a session check
    request.session['user_id']=results['user'].id
    request.session['user_first_name']=results['user'].first_name

    storage = messages.get_messages(request)
    storage.used = True
    return redirect('/success')

def sessionCheck(request):
    try:
        return request.session['user_id']
    except:
        return False

def success(request):
    if sessionCheck(request)==False:
        return redirect ('/')
    messages.success(request, 'Successfully logged in!')
    return render(request, 'login_app/success.html')

def logout(request):
    request.session.flush()
    return redirect ('/')
