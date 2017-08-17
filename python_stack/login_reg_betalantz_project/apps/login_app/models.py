from __future__ import unicode_literals
from django.db import models
import re
import bcrypt

#Our new manager!
#No methods in our new manager should ever catch the whole request object with a parameter!!! (just parts, like request.POST)
class UserManager(models.Manager):
    def basic_validator(self, postData):
        errors = {}
        if len(postData['first_name'])==0:
            errors["first_name_req"]="'First name' is a required field."
        if len(postData['last_name'])==0:
            errors["last_name_req"]="'Last name' is a required field."
        if len(postData['first_name'])<3:
            errors["first_name_len"]="First name should be more than 2 characters."
        if len(postData['last_name'])<3:
            errors["last_name_len"]="Last name should be more than 2 characters."
        if postData['first_name'].isalpha()==False:
            errors["first_name_alph"]="Names must be characters (a-z) only."
        if postData['last_name'].isalpha()==False:
            errors["last_name_alph"]="Names must be characters (a-z) only."
        if len(postData['email'])==0:
            errors["email_req"]="'Email' is a required field."
        if not re.match('(\w+[.|\w])*@(\w+[.])*\w+', postData['email']):
            errors["email_inval"]="Please enter a valid email."
        if len(postData['psw'])<8:
            errors["psw_len"]="Passwords must be at least 8 characters long."
        if postData['psw'] != postData['cfm']:
            errors["psw_match"]="Passwords do not match."
        return errors;

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