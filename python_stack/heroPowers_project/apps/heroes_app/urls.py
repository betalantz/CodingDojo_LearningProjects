from django.conf.urls import url
from . import views

def test(request):
    print '>'*20, 'welcome to heroes_app urls'

urlpatterns = [
    url(r'^$', views.test),
    # url(r'^$', views.index),
    # url(r'^users/$', views.index, name='my_index'),
    # url(r'^users/new', views.new, name='my_new'),
    # url(r'^users/create', views.create, name='my_create'),
    # url(r'^users/(?P<id>\d+)/$', views.show, name='my_show'),
    # url(r'^users/(?P<id>\d+)/edit/$', views.edit, name='my_edit'),
    # url(r'^users/(?P<id>\d+)/destroy/$', views.destroy, name='my_destroy'),

]