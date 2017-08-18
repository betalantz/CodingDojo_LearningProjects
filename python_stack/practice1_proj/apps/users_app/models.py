from __future__ import unicode_literals
from django.shortcuts import redirect
from django.db import models

class UserManager(models.Manager):
    def login_validator(self, postData):
        results = {'status': True, 'match': True, 'errors': [], 'user': None}
        if len(postData['name'])==0:
            results["errors"].append("'Name' is a required field.")
        if len(postData['age'])==0:
            results["errors"].append("'Age' is a required field.")
        if len(postData['name'])<3:
            results["errors"].append("Name should be more than 2 characters.")        
        if len(results['errors']):
            results['status']=False
            return results

        users = User.objects.filter(name = postData['name'], age=postData['age'])
        print "filter results", users[0]
        if len(users):
            results['user']=users[0]
            print results['user'], "match=True set 'user' to found user at [0]"
            return results
        else:
            results['match']==False
            print results['user'], "match=False no match found"
        # results['user']=User.objects.create(
        #     name=postData['name'],
        #     age=postData['age'],
        #     )
            return results
       

    def createUser(self, postData):
        user = User.objects.create(
            name=postData['name'],
            age=postData['age'],
            )
        return user

class User(models.Model):
    name = models.CharField(max_length=50)
    age = models.IntegerField()
    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)
    objects = UserManager()

class Comments(models.Model):
    comment = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)
    user = models.ForeignKey(User, related_name = 'comments')
