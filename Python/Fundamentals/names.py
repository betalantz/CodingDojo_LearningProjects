students = [
     {'first_name':  'Michael', 'last_name' : 'Jordan'},
     {'first_name' : 'John', 'last_name' : 'Rosales'},
     {'first_name' : 'Mark', 'last_name' : 'Guillen'},
     {'first_name' : 'KB', 'last_name' : 'Tonel'}
]
def print_names(list, bool):
    output = []
    for val in list:
        new_name = val['first_name'] + " " + val['last_name']
        output.append(new_name)
        if bool == True: 
            print new_name
    return output

print_names(students, True)

users = {
 'Students': [
     {'first_name':  'Michael', 'last_name' : 'Jordan'},
     {'first_name' : 'John', 'last_name' : 'Rosales'},
     {'first_name' : 'Mark', 'last_name' : 'Guillen'},
     {'first_name' : 'KB', 'last_name' : 'Tonel'}
  ],
 'Instructors': [
     {'first_name' : 'Michael', 'last_name' : 'Choi'},
     {'first_name' : 'Martin', 'last_name' : 'Puryear'}
  ]
 }

def print_nested(dict):
    for key in dict:
        print key
        full_names = print_names(dict[key], False)
        for i, value in enumerate(full_names):
            print "{} - {} - {}".format(i +1, value, len(value)-1)

print_nested(users)