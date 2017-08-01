capitals = {} #create an empty dictionary then add values
capitals["svk"] = "Bratislava"
capitals["deu"] = "Berlin"
capitals["dnk"] = "Copenhagen"

# the follwing 2 loops pring all keys

# for data in capitals:
#     print data

# for key in capitals.iterkeys():
#     print key

# to print all values

# for val in capitals.itervalues():
#     print val

# to print both keys and values

# for key,data in capitals.iteritems():
#     print key, "=", data

# creating dict from lists
# first zip the lists together into a new list of tuples (the zipped list will omit extra elements if one list is longer)

dishes = ["pizza", "sauerkraut", "paella", "hamburger"]
countries = ["Italy", "Germany", "Spain", "USA"]

country_specialties = zip(countries, dishes)
print country_specialties

# then convert new list to dict

country_specialties_dict = dict(country_specialties)
print country_specialties_dict