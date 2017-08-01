x = [19,2,54,-2,7,12,98,32,10,-3,6]
x.sort()
y = len(x)/2
newList = [x[0:y]]
newList.extend(x[y:len(x)])
print newList