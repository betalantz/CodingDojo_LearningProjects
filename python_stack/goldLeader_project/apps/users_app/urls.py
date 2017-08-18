from django.conf.urls import url
from . import views

def test(request):
    print "[[[[[[[[  user urls ]]]]]]]]]"

urlpatterns = [
    url(r'^$', views.index),
    url(r'^register/$', views.register, name='my_register'),
    url(r'^login/$', views.login, name='my_login'),
    url(r'^dashboard/$', views.dashboard, name='my_dashboard'),
    url(r'^logout/$', views.logout, name='my_logout'),
    url(r'^showAll/$', views.showAll, name='my_showAll'),
]