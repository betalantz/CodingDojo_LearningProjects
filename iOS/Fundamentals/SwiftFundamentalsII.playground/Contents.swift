import UIKit

for i in 1...255{
    print(i)
}

for x in 1...100{
    if x % 3 == 0 || x % 5 == 0{
        print(x)
    }
}

for x in 1...100{
    if x % 3 == 0 && x % 5 == 0 {
        print("FizzBuzz")
    } else if x % 5 == 0 {
        print("Buzz")
    } else if x % 3 == 0 {
        print("Fizz")
    } else {
        print(x)
    }
}
