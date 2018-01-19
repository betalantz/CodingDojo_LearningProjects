def rSum(arr):
    if(len(arr)==0):
        return 0
    else:
        return arr[0] + rSum(arr[1:])

print rSum([2,4,6])

def rArrLen(arr):
    if (arr==[]):
        return 0
    else:
        return 1 + rArrLen(arr[1:])

print rArrLen([3,5,7,9])

def findMax(arr):
    max = arr[0]
    for i in range (1, len(arr)):
        if (arr[i]>max):
            max = arr[i]
    return max

print findMax([6,-3,9,0,2])

def rFindMax(arr):
    if len(arr)==2:
        return arr[0] if arr[0] > arr[1] else arr[1]
    sub_max = rFindMax(arr[1:])
    return arr[0] if arr[0] > sub_max else sub_max

print rFindMax([100,3,7,101,99])

# def rBinarySearch(arr, item, low=0, high = (len(arr)-1)):
#     if (high<low):
#         return None
#     else:
#         mid = (low+high)/2
#         guess = arr[mid]
#         if (guess == item):
#             return mid
#         if (guess > item):
#             return rBinarySearch(arr, item, low, mid-1)
#         else:
#             return rBinarySearch(arr, item, mid+1, high)

def rBinarySearch(arr, val, low=0, high=None):
    high = high or len(arr)-1

    if high<low:
        return False
    else:
        mid = low + (high-low)/2  #or mid = (low+high)//2

    if arr[mid]>val:
        return rBinarySearch(arr, val, low, mid-1)
    elif arr[mid]<val:
        return rBinarySearch(arr, val, mid+1, high)
    return mid

this_list = [-5,0,2,4,8,16]
print rBinarySearch(this_list, 0)
print rBinarySearch(range(10), 7)
print rBinarySearch(range(10), 11)

def binary_search(value, items, low=0, high=None):
    """
    Binary search function.
    Assumes 'items' is a sorted list.
    The search range is [low, high]
    """

    high = len(items) if high is None else high
    pos = low + (high - low) / len(items)

    if pos == len(items):
        return False
    elif items[pos] == value:
        return pos
    elif high == low:
        return False
    elif items[pos] < value:
        return binary_search(value, items, pos + 1, high)
    else:
        assert items[pos] > value
        return binary_search(value, items, low, pos)

for val in range(7):
    print val, binary_search(val, [1, 2, 3, 5])
