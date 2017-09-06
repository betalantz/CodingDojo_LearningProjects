class Person {
    var species = "H. Sapiens"
    var name: String
    init(name: String) {         // Note: this function doesn't get called explicitly.  It is called
        // when creating an instance using the initialization syntax -- "Person()"
        self.name = name           // Note the use of "self" here to refer to the name property
    }
    func speak() {
        print("Hello! I am a \(self.species) and my name is \(self.name)")
        // Note how we refer to the properties using "self"
    }
}
class Developer: Person {      // Note how we are specifying that Developer will inherit from Person
    var favoriteLanguage: String
    init(name: String, favoriteLanguage: String) {
        self.favoriteLanguage = favoriteLanguage
        super.init(name: name) //could one reset name property here as in Person class without using super.init?
    }
    override func speak() {
        print("Hello! I am a Developer! My name is \(self.name) and my favorite language is \(self.favoriteLanguage).")
    }
}
var myDeveloper: Developer = Developer(name: "Jay", favoriteLanguage: "Swift")
myDeveloper.speak()
