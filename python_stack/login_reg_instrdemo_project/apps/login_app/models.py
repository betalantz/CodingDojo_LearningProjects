from __future__ import unicode_literals
from django.db import models
import re
import bcrypt

class UserManager(models.Manager):
    def RegVal(self, PostData):
        results = {'status': True, 'errors': []}
        if len(PostData['first_name']) < 3:
            results['errors'].append('Your name must be 3 chars long. Sorry Al.')
        if len(PostData['last_name']) < 3:
            results['errors'].append('Your name must be 3 chars long. Sorry Al.')
        if not re.match('(\w+[.|\w])*@(\w+[.])*\w+', PostData['email']):
            results['errors'].append('Please enter a valid email.')
        if len(PostData['password']) < 5:
            results['errors'].append('Your password must be 5 or more chars long.')
        if PostData['password'] != PostData['c_password']:
            results['errors'].append('Your passwords do not match.')
        # TODO
        # add check to see if user is in db
        if len(self.filter(email = PostData['email'])) > 0:
            results['errors'].append('User already exists.')
        if len(results['errors']) > 0:
            results['status'] = False
        return results
    def creator(self, PostData):
        # print 'you did it'
        hashed = bcrypt.hashpw(PostData['password'].encode(), bcrypt.gensalt())
        # print hashed
        user = User.objects.create(first_name = PostData['first_name'], last_name = PostData['last_name'], email = PostData['email'], password = hashed)
        return user
    def logVal(self, PostData):
        # print PostData
        results = {'status': True, 'errors': [], 'user': None}
        users = self.filter(email = PostData['email'])
        # print user
        if len(users) < 1:
            results['errors'].append('User does not exist.')
        else:
            if bcrypt.checkpw(PostData['password'].encode(), users[0].password.encode()) == False:
                results['errors'].append('Wrong password.')
        # print results
        if len(results['errors']) > 0:
            results['status'] = False
        else:
            results['user'] = users[0]
        return results


class User(models.Model):
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    email = models.CharField(max_length=100)
    password = models.CharField(max_length=100)
    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)
    objects = UserManager()

