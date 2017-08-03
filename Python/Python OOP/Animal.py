class Animal(object):
    def __init__(self, name, health):
        self.name = name
        self.health = health
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
    def __init__(self, name, health):
        super(Dog, self).__init__(name, health)
        self.health = 150
    def pet(self):
        self.health += 5
        return self
class Dragon(Animal):
    def __init__(self, name, health):
        super(Dragon, self).__init__(name, health)
        self.health += 170
    def fly(self):
        self.health -= 10
        return self
    def displayHealth(self):
        super(Dragon, self).displayHealth()
        print "I am a dragon!"
        return self

a = Animal("Fletch", 20)
a.walk().walk().walk().run().run().displayHealth()
d = Dog("Nymeria", 0)
d.walk().walk().walk().run().run().pet().displayHealth()
w = Dragon("Yevaud", 0)
w.walk().walk().walk().run().run().fly().displayHealth()
