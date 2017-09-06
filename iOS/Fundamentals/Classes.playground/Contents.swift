//class Person {
//    var species = "H. Sapiens"
//    func speak() {
//        print("Hello! I am a \(self.species)")   // Note how we refer to the properties using "self"
//    }
//}
////var myPerson: Person = Person()
//var myPerson = Person()
//myPerson.species = "Homo Sapiens"
//print("\(myPerson.species)")
//myPerson.speak()

class User {
    var intelligence = 0
    func studyForTopic(topic: String, hours: Int) {  //first argument gets no ext. parameter name, but the rest do, so where is it?
        print("I am studying \(topic) for \(hours) hours")
    }
}
var user = User()
user.studyForTopic(topic: "Math", hours: 12)

class Person {
    var species = "H. Sapiens"
    var name: String
    init(name: String) {   // Note this function doesn't get called explicitly. It is called
        // when creating an instance using initialization syntax -- "Person()".
        self.name = name     // Note use of "self" here to refer to the name property.
    }
    func speak() {
        print("Hello! I am a \(self.species) and my name is \(self.name)")
        // Note how we refer to the properties using "self".
    }
}
var myPerson: Person = Person(name: "Jay")   // Now we have to pass a param to Person initialization.
myPerson.speak()                             // Note we call method similar to how we access properties.
