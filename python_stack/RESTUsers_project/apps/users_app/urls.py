from django.conf.urls import url, include
from . import views

def test(request):
    print 'welcome to users_app urls'

urlpatterns = [
    url(r'^', views.index),
]