from django.shortcuts import render

def test(request):
    print "# Create your views here."

def index(request):
    return render(request, "users_app/index.html")