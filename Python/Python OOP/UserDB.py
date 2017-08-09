from user import User

class UserDB(object):
    def __init__(self):
        self.users = []

    def create(self, name, age):
        self.users.append(User(name, age))
        return self
    
    def all(self):
        for user in self.users:
            print user.name, user.age
        return self.users

    def get(self, name):
        for user in self.users:
            if user.name == name:
                print user.name, "has been found."
                return user
        print name, "hasn't been found."
        return self

    def filter(self, name):
        match = []
        for user in self.users:
            if user.name == name:
                match.append(user)
        print match[0].name
        return match

    def exclude(self, name):
        match = []
        for user in self.users:
            if user.name !== name:
                match.append(user)
        print match[0].name
        return self

    def delete(self, name):
        for user in self.users:
            if user.name == name:
                self.users.remove(user)
                return self
        return self

db1 = UserDB().create('Bob', 20).create('Shirley', 82).create('Amanda', 55).create('Amanda', 99)
# print db1.all()
# db1.delete('Amanda')
# print db1.all()
db1.get('Frank')
db1.filter('Amanda')
