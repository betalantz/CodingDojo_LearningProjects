// the naming convention for Classes and Object Constructors is that they're capitalized and singular
function Person1(name, age){
    var privateVariable = "This variable is private";
    var privateMethod = function(){
        console.log(this);
    }
    this.name = name;
    this.age = age;
    this.greet = function(){
        console.log("Hello my name is " + this.name + " and I am " + this.age + " years old!");
    }
}
var eliza = new Person1("Eliza", 48);
console.log(eliza.privateVariable);
eliza.greet();
// undefined!

function Person2(name, age){
    // create a private variable that stores a reference to the new object we create
    var self = this;
    var privateVariable = "This variable is private";
    var privateMethod = function(){
        console.log("this is a private method for " + self.name);
    }
    this.name = name;
    this.age = age;
    this.greet = function(){
        console.log("Hello my name is " + this.name + " and I am " + this.age + " years old!");
        // we can access our attributes within the constructor!
        console.log("Also my privateVariable says: " + privateVariable)
        // we can access our methods within the constructor!
        privateMethod();
    }
}
var joe = new Person2("Joe", 23);
joe.greet();
