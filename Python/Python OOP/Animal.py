class Animal(object):
    def __init__(self, name):
        self.name = name
        self.health = 100
    def walk(self):
        self.health -= 1
        return self
    def run(self):
        self.health -= 5
        return self
    def displayHealth(self):
        print "{}'s health is {}".format(self.name, self.health)
        return self
class Dog(Animal):
    def __init__(self, name):
        super(Dog, self).__init__(name)
        self.health = 150
    def pet(self):
        self.health += 5
        return self
class Dragon(Animal):
    def __init__(self, name):
        super(Dragon, self).__init__(name)
        self.health = 170
    def fly(self):
        self.health -= 10
        return self
    def displayHealth(self):
        super(Dragon, self).displayHealth()
        print "I am a dragon!"
        return self

a = Animal("Fletch")
a.walk().walk().walk().run().run().displayHealth()
d = Dog("Nymeria")
d.walk().walk().walk().run().run().pet().displayHealth()
w = Dragon("Yevaud")
w.walk().walk().walk().run().run().fly().displayHealth()
