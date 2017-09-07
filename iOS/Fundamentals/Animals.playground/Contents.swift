
import UIKit

class Animal {
    var name: String
    var health = 100
    init(specName: String, mutableHealth: Int?) {
        self.name = specName
        if let changedHealth = mutableHealth {
            self.health = changedHealth
        }
    }
    func displayHealth() {
        print("Health: \(self.health)")
    }
}
 
class Cat: Animal {
    init(catName:String) {
        super.init(specName: catName, mutableHealth: 150)
    }
    func growl() {
        print("Rawr!")
    }
    
    func run() {
        
        self.health -= 10
        print("See cat run! But health is now \(self.health)")
    }
}

class Cheetah: Cat {
    override func run() {
        if self.health <= 50 {
            print("Cheetah too tired to run!")
        } else {
        self.health -= 50
        print("Wow, really fast! But health is now \(self.health)")
        }
    }
    func sleep() {
        if self.health > 200 {
            self.health = 200
        }
        print("Zzzzz... Health is \(self.health)")
    }
}

    
class Lion: Cat {
    init(lionName: String) {
        super.init(catName: lionName)
        self.health = 200
    }
    override func growl() {
        print("ROAR!!! I'm King of the Jungle, baby!")
    }
}

var myCheetah = Cheetah(catName: "Alex")
myCheetah.run()
myCheetah.run()
myCheetah.run()
myCheetah.run()
myCheetah.displayHealth()

var myLion = Lion(lionName: "Roy")
myLion.run()
myLion.run()
myLion.run()
myLion.growl()
