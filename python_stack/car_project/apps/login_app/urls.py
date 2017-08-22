from django.conf.urls import url, include
from django.contrib import admin
from . import views

def test(request):
    print "^"*20, "login urls"

urlpatterns = [
    url(r'^', views.test),
]