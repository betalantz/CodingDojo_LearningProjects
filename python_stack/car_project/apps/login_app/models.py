from __future__ import unicode_literals

from django.db import models
import re
import bcrypt

class UserManager(models.Manager):
    def regVal(self, postData):
        results = {'status':False, 'errors':[]}
        if len(postData['first_name'])<3:
            results['errors'].append('First name must be at least 3 chars long.')
            results['status']=True
        if len(postData['last_name'])<3:
            results['errors'].append('Last name must be at least 3 chars long.')
            results['status']=True
        if not re.match('(\w+[.|\w])*@(\w+[.])*\w+', postData['email']):
            results["errors"].append("Please enter a valid email.")
            results['status']=True
        if postData['password'] != postData['cpassword']:
            results["errors"].append("Passwords must match.")
            results['status']=True
        if results['status']==False:
            print len(self.filter(email=postData['email']))
            if len(self.filter(email=postData['email'])) == 0:
                hashed = bcrypt.hashpw(postData['password'].encode(), bcrypt.gensalt())
                results['user'] = self.create(first_name=postData['first_name'],
                last_name=postData['last_name'],
                email=postData['email'],
                password=hashed,
                bday=postData['bday'])
            else:
                results["errors"].append("User already exists.")
                results['status']=True

        print results
        return results

class User(models.Model):
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    email = models.CharField(max_length=50)
    bday = models.DateField(max_length=50)
    password = models.CharField(max_length=500)
    objects = UserManager()
    
