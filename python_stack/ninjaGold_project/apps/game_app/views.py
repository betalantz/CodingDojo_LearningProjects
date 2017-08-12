# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render, redirect
import random
from time import gmtime, strftime

def test(request):
    print "# Create your views here."

def index(request):
    # del request.session['gold']
    # del request.session['activities']
    try:
        request.session['gold']
    except:
        request.session['gold'] = 0
    try:
        request.session['activities']
    except:
        request.session['activities'] = []
    return render(request, "game_app/index.html")

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
    return redirect('/')