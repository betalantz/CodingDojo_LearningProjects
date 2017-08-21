# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render, redirect, reverse

# def test(request):
#     print "<oo><oo><oo> views"

def index(request):
    return render (request, "main_app/index.html")

def process(request):
    try:
        request.session['counter'] += 1
    except:
        request.session['counter'] = 1
    try:
        request.session['name'] = request.POST['name']
    except:
        return redirect (reverse('index'))
    request.session['location'] = request.POST['location']
    request.session['language'] = request.POST['language']
    try:
        request.session['comment'] = request.POST['comment']
    except:
        request.session['comment'] = []
    
    print request.session['name']
    print request.session['location']
    print request.session['language']
    print request.session['comment']
    return redirect(reverse('result'))

def result(request):
    return render (request, "main_app/result.html")