name = ["Anna", "Eli", "Pariece", "Brendan", "Amy", "Shane", "Oscar"]
favorite_animal = ["horse", "cat", "spider", "giraffe", "ticks", "dolphins", "llamas"]

def make_dict(arr1, arr2):
  new_dict = {}
  new_tuples = zip(arr1, arr2)
  new_dict = dict(new_tuples)
  print new_dict
  return new_dict

make_dict(name, favorite_animal)