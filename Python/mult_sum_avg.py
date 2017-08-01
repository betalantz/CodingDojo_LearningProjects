# Prints odd numbers from 1 to 1000 with 'for' loop

count = 1
while count < 1001:
    print count
    count += 2

# Prints multiples of 5 from 5 to 1,000,000

for count in range (5, 1000000):
    count = count * 5
    print count

# Given list a, sum the values

a = [1, 2, 5, 10, 255, 3]
print sum(a)

# Given list a, print the average of the values

a = [1, 2, 5, 10, 255, 3]
print sum(a)/len(a)
