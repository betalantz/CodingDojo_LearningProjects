from django.shortcuts import render, redirect
from ..login_app.models import *
from models import *
from django.contrib import messages
from ..login_app.views import sessionCheck
from django.core.urlresolvers import reverse

def test(request):
    print '>'*20, 'welcome to heroes_app views'

def dashboard(request):
    if sessionCheck(request)==False:
        return redirect ('/')
    
    context = {
        'heroes' : Hero.objects.all()
        }
    return render(request, 'heroes_app/dash.html', context)

def addHero(request):
    return render(request, 'heroes_app/createHero.html')

def createHero(request):
    print 'arriving at createHero method'
    Hero.objects.create(hero_name=request.POST['hero_name'])
    print Hero.objects.last()
    return redirect('/heroes/dashboard')

def addPower(request):
    return render(request, 'heroes_app/createPower.html')

def createPower(request):
    print 'arriving at createPower method'
    Power.objects.create(power=request.POST['power'])
    print Power.objects.last()
    return redirect('/heroes/dashboard')

def show(request,id):
    context = {
        "hero": Hero.objects.get(id=id),
        "powers_list": Power.objects.all()
    }
    return render(request, 'heroes_app/heropage.html', context)

def giveHeroPower(request, id):
    hero = Hero.objects.get(id=id)
    selection = request.POST['newPower']
    pow = Power.objects.get(id=selection)
    pow.heroes.add(Hero.objects.get(id=id))
    pow.save()
    
    try:
        request.session['addMore'] = request.POST['addMore']
    except:
        request.session['addMore'] = None
    if request.session['addMore'] != None:
            return redirect(reverse('my_show', kwargs={'id': id}))
    return redirect('/heroes/dashboard')


def addLike(request, id):
    hero = Hero.objects.get(id=id)
    hero.allLikes += 1
    hero.save()
    user_id = request.session['user_id']
    like_stat = User.objects.get(id=user_id)
    hero.userLikes.add(like_stat)
    try:
        request.session['liked']
    except:
        request.session['liked'] = True
    return redirect('/heroes/dashboard')

def subLike(request, id):
    hero = Hero.objects.get(id=id)
    hero.allLikes -= 1
    hero.save()
    user_id = request.session['user_id']
    like_stat = User.objects.get(id=user_id)
    hero.userLikes.remove(like_stat)
    request.session['liked']=False
    return redirect('/heroes/dashboard')


def getLikes(request, id):
    user_id = request.session['user_id']
    liked_list = Power.objects.filter(user_id)
    print liked_list
    for hero in liked_list:
        
    pass