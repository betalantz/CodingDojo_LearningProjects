from django.conf.urls import url
from . import views

def test(request):
    print "<><><><><><>< app urls <><><><><><>"


urlpatterns = [
    # url(r'^', include('apps.users_app.urls')),
    url(r'^$', views.index),
    url(r'^login/$', views.login, name='my_login'),
    url(r'^signup/$', views.signup, name='my_signup'),
    url(r'^logout/$', views.logout, name='my_logout'),
    url(r'^dash/$', views.dash, name='my_dash'),

]