from __future__ import unicode_literals

from django.db import models

class Hero(models.Model):
    hero_name = models.CharField(max_length=50, default="")
    likes = models.IntegerField(default=0)
    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)

class Power(models.Model):
    power = models.CharField(max_length=50, default="")
    heroes = models.ManyToManyField(Hero, related_name='powers')
    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)
