iL = [2,3,1,7,4,12,]
sL = ["unicorn","sunshine",'poppycock']
mL = [13, "penguin", 0, 5, "horsefeathers"]
uL = [-2, 0, None, 11,]

def typeOfList(list):
    compare = [False, False]
    newStr = ""
    newSum = 0
    for val in list:
        dataType = type(val).__name__
        if dataType == 'str':
            compare[0] = True
            newStr += " " + val
        elif dataType == 'int':
            compare[1] = True
            newSum += val
        else:
            print "A value {} in the list is unrecognized".format(val)
            compare = [False, False]
            break
    
    if compare[0] and compare[1]:
        print "Your list is of mixed types."
        print "The compbined string is ", newStr
        print "The sum of the values is ", newSum
    elif compare[0]:
        print "Your list was all strings."
        print "I've concatenated them into this string: ", newStr
    elif compare[1]:
        print "Your list was all numbers"
        print "The values sum to ", newSum
    else:
        print "I cannot compute your unrecognized values."

typeOfList(uL)
