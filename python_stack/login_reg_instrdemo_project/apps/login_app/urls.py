"""login_reg_instrdemo_project URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.10/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.conf.urls import url, include
    2. Add a URL to urlpatterns:  url(r'^blog/', include('blog.urls'))
"""
from django.conf.urls import url
from django.contrib import admin
from . import views

def test(request):
    print '>>>>>>><<<<<<< app urls test'

urlpatterns = [
    url(r'^$', views.index),
    url(r'^register$', views.register, name='my_register'),
    url(r'^login$', views.login, name='my_login'),
    url(r'^home$', views.home, name='my_home'),
    url(r'^logout$', views.logout, name='my_logout'),
    url(r'^delete$', views.delete, name='my_delete'),
]
