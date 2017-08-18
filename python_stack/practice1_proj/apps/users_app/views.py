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
    if results['match']==False:
        print results['user'], "match==False1 call createUser()"
        user = User.objects.createUser(request.POST)
        print results['user'], "match==False2 call createUser()"
        request.session['user_id']=user.id
        request.session['user_name']=user.name
        request.session['age']=user.age
        return redirect('/dash')
    else:    
        print results['user'], "match==True add found user to session"
        request.session['user_id']=results['user'].id
        request.session['user_name']=results['user'].name
        request.session['age']=results['user'].age
        return redirect('/dash')

def signup(request):
    user = User.objects.createUser(request.POST)
    request.session['user_id']=results['user'].id
    request.session['user_name']=results['user'].name
    request.session['age']=results['user'].age
    return redirect('/dash')
    

def dash(request):
    return render(request, 'users_app/dash.html')

def logout(request):
    request.session.flush()
    return redirect ('/')

