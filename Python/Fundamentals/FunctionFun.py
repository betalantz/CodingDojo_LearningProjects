def odd_even():
    for count in range(1, 2001):
        if count % 2 != 0:
            print "Number is ", count, ". This is an odd number."
        else:
            print "Number is", count, ". This is an even number."
    # return
# odd_even()

def multiply(arr,num):
    for x in range(len(arr)):
        arr[x] *= num
    return arr
a = [2,4,10,16]
b = multiply(a,5)
# print b

def layered_multiples(arr):
  new_array = []
  for i in arr :
      ones = [1] * i
      new_array.append(ones)
  return new_array

x = layered_multiples(multiply([2,4,5],3))
print x