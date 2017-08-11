from django.shortcuts import render, HttpResponse, redirect

# Create your views here.
def index(request):
    response = 'placeholder to later display all the list of blogs'
    return HttpResponse(response)

def new(request):
    response = 'placeholder to later display a new form to create a new blog'
    return HttpResponse(response)

def create(request):
    return redirect('/blogs')

def show(request, num):
    response = 'placeholder to later display blog ' + num
    return HttpResponse(response)

def edit(request, num):
    response = 'placeholder to edit blog ' + num
    return HttpResponse(response)

def destroy(request, num):
    return redirect('/blogs')
