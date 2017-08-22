from django.shortcuts import render

def test(request):
    print ">"*20, "login views"


def index(request):
    return render(request, "login_app/index.html") 

def register(request):
    print request.POST, 'yyhhy'