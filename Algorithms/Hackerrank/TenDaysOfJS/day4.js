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

function getCount(objects) {
    let count = 0
    objects.forEach((o) => {
        if (o.x == o.y) { count++ }
    })
    return count
}
const obj0 = [ 
    { x: 1, y: 1 },
    { x: 2, y: 3 },
    { x: 3, y: 3 },
    { x: 3, y: 4 },
    { x: 4, y: 5 },
    { x: 9, y: 9 }
]
console.log(getCount(obj0));
   
