"""familiarize_project URL Configuration

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
from . import views

def test(request):
    print 'Heyyyy, listen to me!'

urlpatterns = [
    url(r'^$', views.index),
    url(r'^blogs/$', views.index),
    url(r'^blogs/new', views.new),
    url(r'^blogs/create', views.create),
    url(r'^blogs/(?P<num>\d+)/$', views.show),
    url(r'^blogs/(?P<num>\d+)/edit/$', views.edit),
    url(r'^blogs/(?P<num>\d+)/delete/$', views.destroy),
]