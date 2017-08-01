word_list = ['hello','world','my','name','is','Anna']
char = 'm'

def findChar(list, target):
    resList = []
    for val in list:
        if val.find(target) >= 0:
            resList.append(val)
    print resList

findChar(word_list, char)