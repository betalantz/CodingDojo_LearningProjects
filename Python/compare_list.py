# list_one = [1,2,5,6,2]
# list_two = [1,2,5,6,2]
# list_one = [1,2,5,6,5]
# list_two = [1,2,5,6,5,3]
# list_one = [1,2,5,6,5,16]
# list_two = [1,2,5,6,5]
list_one = ['celery','carrots','bread','milk']
list_two = ['celery','carrots','bread','cream']

if cmp(list_one, list_two) == 0:
    print "The lists are the same."
else:
    print "The lists are NOT the same."