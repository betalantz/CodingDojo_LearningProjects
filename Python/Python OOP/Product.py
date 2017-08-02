class Product(object):
    def __init__(self, price, itemName, weight, brand, cost):
        self.price = price
        self.itemName = itemName
        self.weight = weight
        self.brand = brand
        self.cost = cost
        self.status = "for sale"
        # self.displayInfo()
    def sell(self):
        self.status = "sold"
        print "Item status: {}".format(self.status)
        return self
    def addTax(self, tax):
        self.price = (self.price+(self.price * tax))
        print "Total price with tax: {}".format(self.price)
        return self 
    def returnItem(self, returnReason):
        if (returnReason == "defective"):
            self.status = "defective"
            self.price = 0
        elif (returnReason == "inBox"):
            self.status = "for sale" 
        elif (returnReason == "opened"):
            self.status = "used"
            self.price = self.price * .8
        return self
    def displayInfo(self):
        print "********************"
        print "Retail price: {}".format(self.price)
        print "Item: {}".format(self.itemName)
        print "Weight: {}".format(self.weight)
        print "Brand: {}".format(self.brand)
        print "Wholesale: {}".format(self.cost)
        print "Item status: {}".format(self.status)
        print "********************"
        return self

product1 = Product(23, "gadgetA", 3, "brandA", 19)
product2 = Product(100, "gadgetB", 5, "brandB", 80)

product1.sell().addTax(.10).displayInfo()
product2.addTax(.08).sell().returnItem("opened").displayInfo()