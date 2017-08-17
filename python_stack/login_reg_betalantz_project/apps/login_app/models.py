from __future__ import unicode_literals
from django.db import models
import re
import bcrypt

#Our new manager!
#No methods in our new manager should ever catch the whole request object with a parameter!!! (just parts, like request.POST)
class UserManager(models.Manager):
    def register_validator(self, postData):
        results = {}
        if len(postData['first_name'])==0:
            results["first_name_req"]="'First name' is a required field."
        if len(postData['last_name'])==0:
            results["last_name_req"]="'Last name' is a required field."
        if len(postData['first_name'])<3:
            results["first_name_len"]="First name should be more than 2 characters."
        if len(postData['last_name'])<3:
            results["last_name_len"]="Last name should be more than 2 characters."
        if postData['first_name'].isalpha()==False:
            results["first_name_alph"]="Names must be characters (a-z) only."
        if postData['last_name'].isalpha()==False:
            results["last_name_alph"]="Names must be characters (a-z) only."
        if len(postData['email'])==0:
            results["email_req"]="'Email' is a required field."
        if not re.match('(\w+[.|\w])*@(\w+[.])*\w+', postData['email']):
            results["email_inval"]="Please enter a valid email."
        if len(postData['psw'])<8:
            results["psw_len"]="Passwords must be at least 8 characters long."
        if postData['psw'] != postData['cfm']:
            results["psw_match"]="Passwords do not match."
        return results

    def createUser(self, postData):
        hash1 = bcrypt.hashpw(postData['psw'].encode(), bcrypt.gensalt())
        user = User.objects.create(
            first_name=postData['first_name'],
            last_name=postData['last_name'],
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
            print results['status']
        else:
            results['user']=users[0]
            print results['user']
        return results

class User(models.Model):
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
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
        return "<User object: {} {} {} {}>".format(self.first_name, self.last_name, self.email, self.password)