# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.shortcuts import render
from time import gmtime, strftime

# def test(request):
#     print 'in our view'

def index(request):
    context = {
        "date": strftime("%B %d, %Y", gmtime()),
        "time": strftime("%H:%M %p", gmtime()),
    }
    return render(request, 'timeDisplay_app/index.html', context)