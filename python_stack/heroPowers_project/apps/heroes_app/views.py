from django.shortcuts import render, redirect
from ..login_app.models import *
from models import *
from django.contrib import messages
from ..login_app.views import sessionCheck

def test(request):
    print '>'*20, 'welcome to heroes_app views'

def dashboard(request):
    if sessionCheck(request)==False:
        return redirect ('/')
    # player = User.objects.get(id=id)
    # confirm = 'Successfully logged in as {}!'.format(request.session.user_first_name)
    # messages.success(request, confirm)
    # context = {'players' : User.objects.all().order_by('-gold').values()[:5]}
    return render(request, 'heroes_app/dash.html')