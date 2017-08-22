from __future__ import unicode_literals
from ..login_app.models import *
from django.db import models

class Hero(models.Model):
    hero_name = models.CharField(max_length=50, default="")
    allLikes = models.IntegerField(default=0)
    userLikes = models.ManyToManyField(User, related_name='heroLikes')
    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)

class Power(models.Model):
    power = models.CharField(max_length=50, default="")
    heroes = models.ManyToManyField(Hero, related_name='powers')
    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)
