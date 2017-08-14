from __future__ import unicode_literals

from django.db import models

# Create your models here.
#Our new manager!
#No methods in our new manager should ever catch the whole request object with a parameter!!! (just parts, like request.POST)
class BlogManager(models.Magager):
    def basic_validator(self, postData):
        errors = {}
        if len(postData['name'])<5:
            errors["name"]="Blog name should be more than 5 characters."
        if len(postData['desc'])<10:
            errors["desc"]="Blog desc should be more than 10 characters."
        return errors;

class Blog(models.Model):
    name = models.CharField(max_length=255)
    desc = models.TextField()
    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)
    # *************************
    # Connect an instance of BlogManager to our User model overwriting
    # the old hidden objects key with a new one with extra properties!!!
    objects = BlogManager()
    # *************************
    def __repr__(self):
        return "<Blog object: {} {}>".format(self.name, self.desc)
class Comment(models.Model):
    comment = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)
    # Notice the association made with ForeignKey for a one-to-many relationship
    # There can be many comments to one blog
    blog = models.ForeignKey(Blog, related_name = "comments")
    def __repr__(self):
        return "<Comment object: {}>".format(self.comment)
class Admin(models.Model):
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    email = models.CharField(max_length=255)
    blogs = models.ManyToManyField(Blog, related_name = "admins")
    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)
    def __repr__(self):
        return "<Admin object: {} {} {}>".format(self.first_name, self.last_name, self.email)
