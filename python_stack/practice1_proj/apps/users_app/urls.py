from django.conf.urls import url
from . import views

def test(request):
    print "<><><><><><>< app urls <><><><><><>"


urlpatterns = [
    # url(r'^', include('apps.users_app.urls')),
    url(r'^', views.index),
]