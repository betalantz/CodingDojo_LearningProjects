from __future__ import unicode_literals
from django.db import models
import re
import bcrypt

#Our new manager!
#No methods in our new manager should ever catch the whole request object with a parameter!!! (just parts, like request.POST)
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
            birthday=postData['birthday'],
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
        return results

class User(models.Model):
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    email = models.CharField(max_length=100)
    birthday=models.DateField(auto_now_add=False)
    password = models.CharField(max_length=100)
    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)
    objects = UserManager()
    def __repr__(self):
        return "<User object: {} {} {} {}>".format(self.first_name, self.last_name, self.email, self.password)