from __future__ import unicode_literals
from django.db import models

class UserManager(models.Manager):
    def login_validator(self, postData):
        results = {'status': True, 'errors': [], 'user': None}
        if len(postData['name'])==0:
            results["errors"].append("'Name' is a required field.")
        if len(postData['age'])==0:
            results["errors"].append("'Age' is a required field.")
        if len(postData['name'])<3:
            results["errors"].append("Name should be more than 2 characters.")        
        if len(results['errors']):
            results['status']=False
        users = self.filter(name = postData['name'], age=postData['age'])
        if len(users) < 1:
            user = User.objects.create(
                name=postData['name'],
                age=postData['age'],
            )
        else:    
            results['user']=users[0]   
        return results


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
