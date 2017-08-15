from django.shortcuts import render, HttpResponse, redirect
from models import *

def test(request):
    print "# Create your views here."

def index(request):
    return render(request, "users_app/index.html", {"users_list": User.objects.all()})

def new(request):
    return render(request, "users_app/new.html") 

def create(request):
    n  = User.objects.create(first_name=request.POST['first_name'], last_name=request.POST['last_name'],email=request.POST['email'])
    showNew = '/users/'+str(n.id) +'/'
    return redirect(showNew)

def show(request, id):
    if request.method=='POST':
        # print 'hello im in show'
        user = User.objects.get(id = id)
        user.first_name = request.POST['first_name']
        user.last_name = request.POST['last_name']
        user.email = request.POST['email']
        user.save()
    return render(request, "users_app/show.html", {"user": User.objects.get(id=id)})


def edit(request, id):
    return render(request, "users_app/edit.html", {"user": User.objects.get(id=id)}) 

# def update(request, id):
#     return redirect('/users')

def destroy(request, id):
    return redirect('/users')
