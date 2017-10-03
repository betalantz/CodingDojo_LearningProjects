// Define the class
function Person(name, age){
    this.name = name;
    this.age = age;
}
// Attach class methods using .prototype
Person.prototype.greet = function(){
    console.log("Hello my name is " + this.name + " and I am " + this.age + " years old!");
    return this;
}
// Create new instances with the new keyword
var amelia = new Person('Amelia', 36);
// Create instance methods by attaching the function directly to an instance
amelia.sing = function(){
    console.log("Lalalala!");
}
amelia.greet();
amelia.sing();

// Private variables are scoped to the constructor with the var keyword
function Car(make, model){
    var odometer = 0;
    this.make = make;
    this.model = model;
    
    // To make functions private, we scope them to the constructor
    function updateOdometer(distance){
        odometer += distance;
    };
    
    // 'Getter' functions help us read private variables
    this.readOdometer = function(){
      return odometer;
    }
    
    // 'Setter' functions help us update private variables
    this.drive = function(distance){
      updateOdometer(distance);
      // return this will allow us to chain methods
      return this;
    }
}
var my_car_instance = new Car("Chevy", "Camaro");
// by returning this, we can chain drive()
my_car_instance.drive(50).drive(90); 
// private variable is undefined
console.log(my_car_instance.odometer);
// but we can read it with our getter function
console.log(my_car_instance.readOdometer());
