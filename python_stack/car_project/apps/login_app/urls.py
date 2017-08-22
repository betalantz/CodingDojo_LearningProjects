from django.conf.urls import url, include
from django.contrib import admin
from . import views

def test(request):
    print "^"*20, "login urls"

urlpatterns = [
    url(r'^$', views.index),
    url(r'^register/$', views.register, name='my_register'),
    url(r'^login/$', views.login, name='my_login'),
]