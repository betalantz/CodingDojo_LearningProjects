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
    # try:
    #     request.session['gold']
    # except:
    #     request.session['gold'] = 0
    player = User.objects.get(id=request.session['user_id'])
    context = {
        "gold" : player.gold,
        "activity" : str(player.activity).split(';')
    }
    # try:
    #     player.activity
    # except:
    #     player.activity = []
    # player.save()
    return render(request, "game_app/game.html", context)

def process(request):
    # print 'jazz hands'
    # print '---------->', request.POST['building']
    player = User.objects.get(id=request.session['user_id'])
    if request.POST['building']=='cave':
        loot = random.randint(5,10)
        player.gold += loot
    if request.POST['building']=='farm':
        loot = random.randint(10,20)
        player.gold += loot
    if request.POST['building']=='house':
        loot = random.randint(2,5)
        player.gold += loot
    if request.POST['building']=='casino':
        loot = random.randint(-50,50)
        player.gold += loot
    datetime = strftime("(%Y/%m/%d, %H:%M %p)", gmtime())
    message = 'You got {} from the {}! {}'.format(loot, request.POST['building'], datetime)
    
    addActivity(player, message)
    player.save()
        # for i in range(0, len(request.session['activities'])):
        #     request.session['activities'][i] = 'hodor'
    return redirect('/game')

def addActivity(player, message):
    activities = str(player.activity).split(';')
    activities.append(message)
    newActivities = ';'.join(activities)
    player.activity = newActivities
    player.save()

# def saveGame(request):
#     g = User.objects.get(id=request.session['user_id'])
#     g.gold = g.gold + request.session['gold']
#     g.activity = request.session['activities']
#     g.save()
#     print g.gold
#     return redirect('/dashboard')