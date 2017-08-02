class Bike(object):
    def __init__(self, price, max_speed):
        self.price = price
        self.max_speed = max_speed
        self.miles = 0
    def ride(self):
        self.miles += 10
        print "Riding... Now this bike has {} miles on it.".format(self.miles)
        return self
    def reverse(self):
        self.miles -= 5
        if self.miles < 0:
            self.miles = 0
        print "Reversing... Now this bike has only {} miles on it.".format(self.miles)
        return self
    def displayInfo(self):
        print "This bike costs ${}. It's maximum speed is {}, and it has been ridden {} miles.".format(self.price, self.max_speed, self.miles)
        return self

bike1 = Bike(125, "25mph")
bike2 = Bike(250, "40mph")
bike3 = Bike(410, "50mph")

bike1.ride().ride().ride().reverse().displayInfo()
bike2.ride().ride().reverse().reverse().displayInfo()
bike3.reverse().reverse().reverse().displayInfo()
