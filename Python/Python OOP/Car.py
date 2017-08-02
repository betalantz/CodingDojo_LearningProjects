class Car(object):
    def __init__(self, price, speed, fuel, mileage):
        self.price = price
        self.speed = speed
        self.fuel = fuel
        self.mileage = mileage
        self.tax = 0.12
    def display_all(self):
        if self.price > 10000:
            self.tax = 0.15
        print "Price: {}".format(self.price)
        print "Speed: {}".format(self.speed)
        print "Fuel: {}".format(self.fuel)
        print "Mileage: {}".format(self.mileage)
        print "Tax: {}".format(self.tax)
        return self

car1 = Car(2000, "35mph", "Full", "15mpg")
car1.display_all()
car2 = Car(2000, "5mph", "Not Full", "105mpg")
car2.display_all()
car3 = Car(5000, "15mph", "Kind of Full", "95mpg")
car3.display_all()
car4 = Car(12000, "25mph", "Full", "25mpg")
car4.display_all()
car5 = Car(4000, "35mph", "Empty", "30mpg")
car5.display_all()
car6 = Car(22000, "35mph", "Half Tank", "15mpg")
car6.display_all()

        