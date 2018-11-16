def is_prime(x):
    if x >= 2:
        for y in range(2, x):
            if not (x % y):
                return False
    else:
        return False
    return True

def is_sqr(x):
    if x**0.5 == int(x**0.5):
        return True
    else:
        return False

for i in range(10, 100001):
    if is_prime(i):
        print i, 'Foo'
    elif is_sqr(i):
        print i, 'Bar'
    else:
        print i, 'FooBar'