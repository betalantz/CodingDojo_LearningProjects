# try this either as a .py file or in the python shell
import turtle
# the distance we want the pointer to travel each time
DIST = 100
alex = turtle.Turtle()
for x in range(0,6):
    print "x", x
    for y in range(1,5):
        print "y", y
        # turn the pointer 90 degrees to the right
        alex.right(90)
        # advance according to set distance
        alex.forward(DIST)
    # add to set distance
    DIST += 20
turtle.done()