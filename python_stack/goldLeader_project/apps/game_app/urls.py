from django.conf.urls import url
from . import views

def test(request):
    print "[[[[[[[[  game urls ]]]]]]]]]"

urlpatterns = [
    url(r'^game/$', views.test),
]