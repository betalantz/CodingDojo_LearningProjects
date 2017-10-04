// parent Dot class
class Dot {
    constructor(x, y){
        this.x = x;
        this.y = y;
    }
    showLocation(){
        console.log(`This Dot is at x ${this.x} and y ${this.y}`);
    }
    // simple method in the parent class
    parentFunction(){
        return "This is coming from the parent!";
    }
}
// child Circle class
class Circle extends Dot {
    constructor(x, y, radius){
        super(x, y);
        this.radius = radius
    }
    showLocation(){
        console.log(`This Circle is at x ${this.x} and y ${this.y}`);
    }
    // simple function in the child class
    childFunction(){
        // by using super, we can call the parent method
        let message = super.parentFunction();
        console.log(message);
    }
}
// we can now create Circles
let circle1 = new Circle(33, 33, 33);
// same attributes as a Dot, plus a radius
console.log(circle1);
// and Circles can access Dot methods
circle1.showLocation();

let cerk = new Circle(1, 2, 3);
cerk.childFunction();
