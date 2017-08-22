from __future__ import unicode_literals
from django.db import models
import re
import bcrypt

class UserManager(models.Manager):
    def register_validator(self, postData):
        results = {'status': True, 'errors': []}
        if len(postData['first_name'])==0:
            results["errors"].append("'First name' is a required field.")
        if len(postData['last_name'])==0:
            results["errors"].append("'Last name' is a required field.")
        if len(postData['first_name'])<3:
            results["errors"].append("First name should be more than 2 characters.")
        if len(postData['last_name'])<3:
            results["errors"].append("Last name should be more than 2 characters.")
        if postData['first_name'].isalpha()==False:
            results["errors"].append("Names must be characters (a-z) only.")
        if postData['last_name'].isalpha()==False:
            results["errors"].append("Names must be characters (a-z) only.")
        if len(postData['email'])==0:
            results["errors"].append("'Email' is a required field.")
        if not re.match('(\w+[.|\w])*@(\w+[.])*\w+', postData['email']):
            results["errors"].append("Please enter a valid email.")
        if len(postData['psw'])<8:
            results["errors"].append("Passwords must be at least 8 characters long.")
        if postData['psw'] != postData['cfm']:
            results["errors"].append("Passwords do not match.")
        
        if len(results['errors']):
            results['status']=False

        return results

    def createUser(self, postData):
        hash1 = bcrypt.hashpw(postData['psw'].encode(), bcrypt.gensalt())
        user = User.objects.create(
            first_name=postData['first_name'],
            last_name=postData['last_name'],
            email=postData['email'],
            password=hash1,
            birthday=postData['bday']
        )
        print user
        return user

class User(models.Model):
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    email = models.CharField(max_length=100)
    password = models.CharField(max_length=100)
    birthday = models.DateField(auto_now_add=False)
    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)
    objects = UserManager()