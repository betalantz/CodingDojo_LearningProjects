import random

def coin(tosses):
    print "Flipping that coin..."
    heads = 0
    tails = 0
    for x in range(0, tosses):
        flip = random.random()
        flip_rounded = round(flip)
        if flip_rounded == 1:
            heads += 1
            print "Flip #", x,": Flipping... It's heads!  Got", heads, "head(s) and", tails, "tails so far."
        elif flip_rounded == 0:
            tails += 1
            print "Flip #", x,": Flipping... It's tails!  Got", heads, "head(s) and", tails, "tails so far."
    print "End of the flippin' program.  Bye!"

coin(10001)