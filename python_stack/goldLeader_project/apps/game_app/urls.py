from django.conf.urls import url
from . import views

def test(request):
    print "[[[[[[[[  game urls ]]]]]]]]]"

urlpatterns = [
    url(r'^game/$', views.game, name='my_game'),
    # url(r'^game/save$', views.saveGame, name='my_return'),
    # url(r'^dashboard/$', users_app.views.dashboard, name='my_dashboard'),
    url(r'^game/process$', views.process),

]