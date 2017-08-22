from django.conf.urls import url
from django.contrib import admin
from . import views

def test(request):
    print "+"*20, "login urls"

urlpatterns = [
    url(r'^$', views.index),
    url(r'^register/$', test, name='my_register'),
]
