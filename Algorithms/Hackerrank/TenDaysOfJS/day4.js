class ES6Rectangle {
    constructor(a, b) {
        this.length = a
        this.width = b
    }
    get perimeter() {
        return this.calcPerimeter()
    }
    calcPerimeter() {
        return (2 * (this.length + this.width))
    }
    get area() {
        return this.calcArea()
    }
    calcArea() {
        return this.length * this.width
    }
}
const rectangle = new ES6Rectangle(4, 5)
console.log(rectangle.length);
console.log(rectangle.width);
console.log(rectangle.perimeter);
console.log(rectangle.area);

function Rectangle(a,b) {
    this.length = a;
    this.width = b;
    this.perimeter = calcPerimeter(this.length, this.width);
    this.area = calcArea(this.length, this.width);
}
function calcPerimeter(length, width){
    return (2 * (length + width))
}
function calcArea(length, width){
    return length * width
}
const rect1 = new Rectangle(4, 5)
console.log(rect1.length);
console.log(rect1.width);
console.log(rect1.perimeter);
console.log(rect1.area);