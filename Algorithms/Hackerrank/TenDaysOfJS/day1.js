/**
*   Calculate the area of a rectangle.
*
*   length: The length of the rectangle.
*   width: The width of the rectangle.
*   
*	Return a number denoting the rectangle's area.
**/
function getArea(length, width) {
    let area;
    area = length * width    
    return area;
}

/**
*   Calculate the perimeter of a rectangle.
*	
*	length: The length of the rectangle.
*   width: The width of the rectangle.
*   
*	Return a number denoting the perimeter of a rectangle.
**/
function getPerimeter(length, width) {
    let perimeter;
    perimeter = (2*length)+(2*width)
    return perimeter;
}
console.log(getArea(2, 3));
console.log(getPerimeter(2, 3));

function factorial(n){
    if (n > 1) {
        return n * factorial(n-1)
    }
    return 1
}
console.log(factorial(5));

const PI = Math.PI
const r = 2.6
let area = PI*r**2
let perimeter = 2*PI*r
// Print the area of the circle:
console.log(area)
// Print the perimeter of the circle:
console.log(perimeter)