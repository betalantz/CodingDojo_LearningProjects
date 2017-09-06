class Person {
    var species = "H. Sapiens"
    var full_name: String
    init(first_name: String, last_name: String) {         // Note: this function doesn't get called explicitly.  It is called
        // when creating an instance using the initialization syntax -- "Person()"
        self.full_name = first_name + " " + last_name           // Note the use of "self" here to refer to the name property
    }
    func speak() {
        print("Hello! I am a \(self.species) and my name is \(self.full_name)")
        // Note how we refer to the properties using "self"
    }
}
class Developer: Person {      // Note how we are specifying that Developer will inherit from Person
    var favoriteLanguage: String
    init(fname: String, lname: String, favoriteLanguage: String) {
        self.favoriteLanguage = favoriteLanguage
        super.init(first_name: fname, last_name: lname) //could one reset name property here as in Person class without using super.init?
    }
    override func speak() {
        print("Hello! I am a Developer! My name is \(self.full_name) and my favorite language is \(self.favoriteLanguage).")
    }
}
var myDeveloper: Developer = Developer(fname: "Lantz", lname: "Warrick", favoriteLanguage: "Swift")
myDeveloper.speak()

class Animal {
    var name: String
    init(name: String) {
        self.name = name
    }
    func bite() {
        print("bite")
    }
}
class Mammal: Animal {
    override func bite() {
        print("chew")
    }
}
