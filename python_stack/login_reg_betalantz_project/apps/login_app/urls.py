from django.conf.urls import url
from . import views

# def test(request):
#     print 'welcome to logins_app urls'

urlpatterns = [
    # url(r'^', test),
    url(r'^$', views.index),
    url(r'^index/$', views.index),
    url(r'^register/$', views.register, name='my_register'),
    url(r'^login/$', views.login, name='my_login'),
    url(r'^success/$', views.success, name='my_success'),
]