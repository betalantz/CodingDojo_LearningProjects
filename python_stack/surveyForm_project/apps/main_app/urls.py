from django.conf.urls import url
from . import views

def test(request):
    print '<<<<<<<<<<<<<<< now in main_app urls'

urlpatterns = [
    url(r'^$', views.test),
    # url(r'^', test),

]
