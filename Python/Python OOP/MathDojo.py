class MathDojo(object):
    def __init__(self):
        self.result = 0

    def add(self, *num):
        for k in num:
            print k
            if (type(k) in (list, tuple)):
                for y in k:
                    self.result += y
            else:
                self.result += k
        return self 
    
    def subtract(self, *num):
        for k in num:
            if type(k) == list or type(k) == tuple:
                for y in k:
                    self.result -= y
            else:
                self.result -= k
        return self 

md = MathDojo()
md.add([1],3,4).add([3, 5, 7, 8], [2, 4.3, 1]).subtract(2.8, [2,3], [1, 2]).result
print(md.result)