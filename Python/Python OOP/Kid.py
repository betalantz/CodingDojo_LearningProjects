class Kid(object):
    def __init__(self, first_name, last_name):
        self.first_name = first_name
        self.last_name = last_name
        self.charm = "charming"
    def speak(self):
        print self.first_name,self.last_name
        return self

kid1 = Kid("Ron", "Weasley").speak()
kid2 = Kid("Hermione", "Granger").speak()
