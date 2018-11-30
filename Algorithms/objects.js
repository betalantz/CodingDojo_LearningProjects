// 'use strict';
var marks = {}
marks.physics = 91
marks.maths = 95
marks.lit = 98
var marksStr = JSON.stringify(marks)
console.log(marksStr);
console.log(JSON.parse(marksStr));

var highscore = 0
for (var i in marks){
    if (marks[i] > highscore) {
        highscore = marks[i]
    }
}
console.log(`Highscore: ${highscore}`);
console.log(Object.values(marks));
console.log(Object.keys(marks));


var triangle = {a:1, b:2, c:3}
function ColoredTriangle() {
    this.color = 'red'
}
ColoredTriangle.prototype = triangle

var obj = new ColoredTriangle

for (const prop in obj){
    console.log(`obj.${prop} = ${obj[prop]}`);
}
// hasOwnProperty() will not return inherited properties
for (const prop in obj) {
    if (obj.hasOwnProperty(prop)) {
        console.log(`obj.${prop} = ${obj[prop]}`);
    }
}
console.log(marks.hasOwnProperty('physics'));
console.log(marks.hasOwnProperty('music'));

class Car {
    constructor(make, model, year) {
        this.make = make
        this.model = model
        this.year = year
    }
}
const myCar = new Car('Volvo', 'XC40', 2018)
for (const prop in myCar) {
    console.log(`car.${prop} : ${myCar[prop]}`);
}
console.log(myCar instanceof Car);

var finalizedMarks = Object.freeze(marks)
finalizedMarks['physics'] = 100
console.log(finalizedMarks);
console.log(Object.isFrozen(finalizedMarks))

var sealedMarks = Object.seal(marks)
delete sealedMarks.lit
sealedMarks.physics = 100
sealedMarks.greek = 90
console.log(sealedMarks);
console.log(Object.isSealed(sealedMarks));