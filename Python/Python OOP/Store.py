from Product import Product

class Store(object):
    def __init__(self, location, owner):
        self.products = []
        self.location = location
        self.owner = owner
    def __repr__(self):
        return "<Store object: location {}, owner {}>".format(self.location, self.owner)
    def add_product(self, product):
        self.products.append(product)
        return self
    def remove_product(self, name):
        for i in range(len(self.products)):
            if (self.products[i].itemName==name):
                del self.products[i]
                break
        return self
    def inventory(self):
        for x in self.products:
            x.displayInfo()
        return self

p1 = Product(23, "gadgetA", 3, "brandA", 19)
p2 = Product(10, "gadgetB", 7, "brandB", 8)
p3 = Product(45, "gadgetC", 10, "brandC", 38)
p4 = Product(18, "gadgetD", 5, "brandD", 14)
s1 = Store("Seattle", "Jack")
s2 = Store("Portland", "Jill")
print s1
s1.add_product(p1).add_product(p3).inventory()
s2.add_product(p2).add_product(p3).add_product(p4).inventory().remove_product("gadgetB").inventory()