aboutMe = {}
aboutMe["name"] = "Betalantz"
aboutMe["age"] = "48"
aboutMe["country of birth"] = "the USA"
aboutMe["favorite language"] = "Python"

def printDict(dict):
    for key,data in aboutMe.iteritems():
        print "My", key, "is", data

printDict(aboutMe)