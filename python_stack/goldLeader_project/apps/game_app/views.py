from __future__ import unicode_literals
from django.shortcuts import render, HttpResponse, redirect
from ..users_app.models import *
from django.contrib import messages
import random
from time import gmtime, strftime
from ..users_app.views import sessionCheck

def test(request):
    print "# Create your views here."

def game(request):
    # del request.session['gold']
    # del request.session['activities']
    if sessionCheck(request)==False:
        return redirect ('/')
    try:
        request.session['gold']
    except:
        request.session['gold'] = 0
    try:
        request.session['activities']
    except:
        request.session['activities'] = []
    return render(request, "game_app/game.html")

def process(request):
    # print 'jazz hands'
    # print '---------->', request.POST['building']
    if request.POST['building']=='cave':
        loot = random.randint(5,10)
        request.session['gold']+= loot
    if request.POST['building']=='farm':
        loot = random.randint(10,20)
        request.session['gold']+= loot
    if request.POST['building']=='house':
        loot = random.randint(2,5)
        request.session['gold']+= loot
    if request.POST['building']=='casino':
        loot = random.randint(-50,50)
        request.session['gold']+= loot
    datetime = strftime("(%Y/%m/%d, %H:%M %p)", gmtime())
    message = 'You got {} from the {}! {}'.format(loot, request.POST['building'], datetime)
    request.session['activities'].append(message)
        # for i in range(0, len(request.session['activities'])):
        #     request.session['activities'][i] = 'hodor'
    return redirect('/game')

def saveGame(request):
    g = User.objects.get(id=request.session['user_id'])
    g.gold = g.gold + request.session['gold']
    g.activity = request.session['activities']
    g.save()
    print g.gold
    return redirect('/dashboard')