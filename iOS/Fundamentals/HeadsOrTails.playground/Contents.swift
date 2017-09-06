
import UIKit

func tossCoin() -> String {
    print("Tossing a Coin!")
    var toss: String  = ""
    let flip = arc4random_uniform(2)
    if flip == 1 {
        toss = "Heads"
    } else {
        toss = "Tails"
    }
    print("\(toss)")
    return toss
}

func tossMultipleCoins(numbToss: Int) -> Double {
    var headsCount = 0
    for _ in 1...numbToss {
        
        let result = tossCoin()
        if result == "Heads" {
            headsCount += 1
        }
    }
    
    let ratio = Double(headsCount)/Double(numbToss)
    print("The ratio of heads tossess to total tosses is \(ratio).")
    return ratio
}

tossMultipleCoins(numbToss: 50)
