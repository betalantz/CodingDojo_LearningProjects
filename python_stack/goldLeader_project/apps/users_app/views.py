from django.shortcuts import render, HttpResponse, redirect
from models import *
from django.contrib import messages

def test(request):
    print "/\/\/\/\/\/ Create user views here."

def index(request):
    return render(request, "users_app/login.html") 

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
    # request.session['user_gold']=results['user'].gold
    

    storage = messages.get_messages(request)
    storage.used = True
    return redirect('/dashboard')

def sessionCheck(request):
    try:
        return request.session['user_id']
    except:
        return False

def dashboard(request):
    if sessionCheck(request)==False:
        return redirect ('/')
    # player = User.objects.get(id=id)
    # confirm = 'Successfully logged in as {}!'.format(request.session.user_first_name)
    # messages.success(request, confirm)
    context = {'players' : User.objects.all().order_by('-gold').values()[:5]}
    return render(request, 'users_app/dash.html', context)

def logout(request):
    request.session.flush()
    return redirect ('/')

def showAll(request):
    if sessionCheck(request)==False:
        return redirect ('/')
    
    context = {'players' : User.objects.all().order_by('-gold').values()}
    return render(request, 'users_app/allUsers.html', context)

def show(request, id):
    player = User.objects.get(id=id)
    activities = str(player.activity).split(';')
    context = {
        "player": User.objects.get(id=id),
        "history": activities
    }
    return render(request, 'users_app/showUser.html', context)

def delete(request):
    my_id = request.session['user_id']
    player = User.objects.get(id=my_id)
    player.delete()
    return redirect ('/')

 
