from django.conf.urls import url
from . import views

def test(request):
    print '<<<<<<<<<<<<<<< now in main_app urls'

urlpatterns = [
    url(r'^$', views.index, name='index'),
    url(r'^process/$', views.process, name='process'),
    url(r'^result/$', views.result, name='result'),
    # url(r'^', test),

]
