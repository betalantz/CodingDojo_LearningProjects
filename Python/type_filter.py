sI = 45
mI = 100
bI = 455
eI = 0
spI = -23
sS = "Rubber baby buggy bumpers"
mS = "Experience is simply the name we give our mistakes"
bS = "Tell me and I forget. Teach me and I remember. Involve me and I learn."
eS = ""
aL = [1,7,4,21]
mL = [3,5,7,34,3,2,113,65,8,89]
lL = [4,34,22,68,9,13,3,5,7,9,2,12,45,923]
eL = []
spL = ['name','address','phone number','social security number']

def filterType(val):
    if isinstance(val, int): # check for integer type and value
        if val >= 100:
            print "{} is a big number!".format(val)
        else:
            print "{} is a small number.".format(val)
    if isinstance(val, str): # check for string data type and length
        if len(val) >= 50:
            print "{} : Long sentence".format(val)
        else:
            print "{} : Short sentence".format(val)
    if isinstance(val, list): # check for list data type and length
        if len(val) >= 10:
            print "{} is a big list!".format(val)
        else:
            print "{} is a short list.".format(val)
    return

filterType(spL)




     
