from django.conf.urls import url
from . import views

def test(request):
    print '>'*20, 'welcome to users_app urls'

urlpatterns = [
    url(r'^$', views.index),
    url(r'^index/$', views.index),
    url(r'^register/$', views.register, name='my_register'),
    url(r'^login/$', views.login, name='my_login'),
    url(r'^success/$', views.success, name='my_success'),
    # url(r'^dashboard/$', views.dashboard, name='my_dashboard'),
    url(r'^logout/$', views.logout, name='my_logout'),
    # url(r'^showAll/$', views.showAll, name='my_showAll'),
    # url(r'^show/(?P<id>\d+)/$', views.show, name='my_show'),

]