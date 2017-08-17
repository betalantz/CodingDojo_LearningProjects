from __future__ import unicode_literals
from django.db import models
import re
import bcrypt

#Our new manager!
#No methods in our new manager should ever catch the whole request object with a parameter!!! (just parts, like request.POST)
class UserManager(models.Manager):
    def register_validator(self, postData):
        results = {'status': True, 'errors': []}
        if len(postData['user_name'])==0:
            results["errors"].append("'Name' is a required field.")
        if len(postData['alias'])==0:
            results["errors"].append("'Alias' is a required field.")
        if len(postData['user_name'])<3:
            results["errors"].append("Name should be more than 2 characters.")
        if len(postData['alias'])<3:
            results["errors"].append("Alias should be more than 2 characters.")
        if postData['user_name'].isalpha()==False:
            results["errors"].append("Names must be characters (a-z) only.")
        if postData['alias'].isalpha()==False:
            results["errors"].append("Alias must be characters (a-z) only.")
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
            user_name=postData['user_name'],
            alias=postData['alias'],
            email=postData['email'],
            password=hash1
        )
        return user

    def login_validator(self, postData):
        results = {'status': True, 'errors': [], 'user': None}
        # filter for email in db
        users = self.filter(email = postData['email'])
        if len(users) < 1:
            results['errors'].append("User not found.")
        elif bcrypt.checkpw(postData['psw'].encode(), users[0].password.encode())==False:
            results["errors"].append("Password is incorrect.")
        
        if len(results['errors']):
            results['status']=False
        else:
            results['user']=users[0]
            print results['user']
        return results

class User(models.Model):
    user_name = models.CharField(max_length=50)
    alias = models.CharField(max_length=50)
    email = models.CharField(max_length=100)
    password = models.CharField(max_length=100)
    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)
    # *************************
    # Connect an instance of BlogManager to our User model overwriting
    # the old hidden objects key with a new one with extra properties!!!
    objects = UserManager()
    # *************************
    def __repr__(self):
        return "<User object: {} {} {} {}>".format(self.user_name, self.alias, self.email, self.password)