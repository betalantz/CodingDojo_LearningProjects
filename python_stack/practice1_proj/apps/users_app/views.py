from django.shortcuts import render, HttpResponse, redirect

def index(request):
    return render (request, 'users_app/index.html')

