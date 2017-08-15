from django.conf.urls import url
from . import views
urlpatterns = [
    url(r'^$', views.toindex, name='my_index'),
    url(r'^blogs/new$', views.new, name='my_new'),
    url(r'^blogs/(?P<id>\d+)/edit$', views.edit, name='my_edit'),
    url(r'^blogs/(?P<id>\d+)/delete$', views.delete, name='my_delete'),
    url(r'^blogs/(?P<id>\d+)$', views.show, name='my_show'),
]