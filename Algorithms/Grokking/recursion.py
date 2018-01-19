def greet(name):
    print "hello, " + name + "!"
    greet2(name)
    print "getting ready to say bye..."
    bye()

def greet2(name):
    print "how are you, " + name + "?"

def bye():
    print "ok bye!"

greet("Lantz")

def factorial(x):
    if x == 1:
        return 1
    else:
        return x * factorial(x-1)

print factorial(3)