
import UIKit

var shuffleArr = [Int]()
for i in 1...255 {
    shuffleArr.append(i)
}


func getRand() ->Int {
    let rand = arc4random_uniform(255)
    let randInt = Int(rand)
    return randInt
}

for _ in 1...100 {
    var random1: Int
    var random2: Int
    var temp: Int
    random1 = getRand()
    random2 = getRand()
    temp = shuffleArr[random1]
    shuffleArr[random1] = shuffleArr[random2]
    shuffleArr[random2] = temp
}
print(shuffleArr)

for idx in 0..<shuffleArr.count {
    
    if shuffleArr[idx] == 42 {
        shuffleArr.remove(at: idx)
        print("We found the answer to the Ultimate Question of Life, the Universe, and Everything at index \(idx).")
        break
    }
    
}

