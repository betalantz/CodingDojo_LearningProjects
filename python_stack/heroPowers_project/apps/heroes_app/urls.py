from django.conf.urls import url
from . import views

def test(request):
    print '>'*20, 'welcome to heroes_app urls'

urlpatterns = [
    # url(r'^$', views.test),
    url(r'^heroes/dashboard/$', views.dashboard, name='my_dashboard'),

    # url(r'^$', views.index),
    # url(r'^users/$', views.index, name='my_index'),
    url(r'^heroes/addHero', views.addHero, name='my_hero'),
    url(r'^heroes/createHero', views.createHero, name='hero_create'),
    url(r'^heroes/addPower', views.addPower, name='my_power'),
    url(r'^heroes/createPower', views.createPower, name='power_create'),
    url(r'^heroes/(?P<id>\d+)/$', views.show, name='my_show'),
    url(r'^heroes/(?P<id>\d+)/like/$', views.addLike, name='Like'),
    url(r'^heroes/(?P<id>\d+)/unlike/$', views.subLike, name='Unlike'),
    url(r'^heroes/(?P<id>\d+)/givePower/$', views.giveHeroPower, name='givePower'),
    # url(r'^users/(?P<id>\d+)/destroy/$', views.destroy, name='my_destroy'),

]