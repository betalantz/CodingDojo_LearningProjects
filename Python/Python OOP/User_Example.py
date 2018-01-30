class User(object):
    def __init__(self, name, email):
        self.name = name
        self.email = email
        self.logged = True
    def __repr__(self):
        return "<User object {}, email{}>".format(self.name, self.email)

    def login(self):
        self.logged = True
        print self.name + " is logged in."
        return self
    def logout(self):
        self.logged = False
        print self.name + " is not logged in"
        return self
    def show(self):
        print "My name is {}. You can email me at {}".format(self.name, self.email)
        return self

if __name__ == "__main__":
    user1 = User("Anna","anna@anna.com")
    print user1
    
user2 = User("Gloin", "gloin@lotr.com")

user2.login().show().logout()
