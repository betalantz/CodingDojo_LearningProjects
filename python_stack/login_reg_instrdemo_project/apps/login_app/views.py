from django.shortcuts import render, redirect
from models import User
from django.contrib import messages

def sessionCheck(request):
    try:
        return request.session['user_id']
    except:
        return False


def index(request):
    # print "<<<<<<<<<>>>>>>>>>>> in views"
    return render(request, 'login_app/index.html')

def register(request):
    # print '****** register method *********'
    results = User.objects.RegVal(request.POST)
    # print results
    if results['status'] == False:
        for error in results['errors']:
            #set the tag on messages to 'error' with dot notation
            messages.error(request, error)
        return redirect('/')
    user = User.objects.creator(request.POST)
    messages.success(request, 'User has been created. Please log in to continue.')
    return redirect('/')

def login(request):
    # print '*******login method*********'
    results = User.objects.logVal(request.POST)
    # print '********', results
    if results['status'] == False:
        for error in results['errors']:
            #set the tag on messages to 'error' with dot notation
            messages.error(request, error)
        return redirect('/')
    request.session['user_id'] = results['user'].id
    request.session['user_first_name'] = results['user'].first_name
    # print '()()()()()()()()()()()', request.session['user_first_name']
    storage = messages.get_messages(request)
    storage.used = True
    return redirect('/home')

def home(request):
    if sessionCheck(request) == False:
        return redirect ('/')
    context = {
        'users': User.objects.all()
    }
    messages.success(request, 'Successfully logged in!')
    return render(request, 'login_app/home.html', context)

def logout(request):
    request.session.flush()
    # print '()()()()()()()()()()()', request.session
    return redirect ('/')

def delete(request, id):
    d = User.objects.get(id = id)
    d.delete()
    return redirect('/home')