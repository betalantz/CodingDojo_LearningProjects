class Classroom(object):
    def __init__(self,name):
        self.name = name
        self.room = []
    def add(self,kid):
        self.room.append(kid)
        return self
    def allSpeak(self):
        for i in self.room:
            i.speak()
        return self
    def debug(self):
        print self.room
        return self

class Kid(object):
    def __init__(self, first_name, last_name):
        self.first_name = first_name
        self.last_name = last_name
        self.charm = "charming"
    def speak(self):
        print  self.first_name, self.last_name
        return self

# test input...
kid1 = Kid("Ron","Weasley")
kid2 = Kid("Hermione","Granger")

classroom = Classroom("A")

classroom.add(kid1).add(kid2).allSpeak()

print "####=====######"
classroom.debug()
