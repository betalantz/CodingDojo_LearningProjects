// demo of block scope in ES6
// this is also a closure
// input val is stored within block of next() calls until generator() is called again with new arg
function generator(input) {
    var index = 0
    return {
        next: () => {
            if (index < input.length) {
                index++
                return input[index-1]
            }
            return ""
        }
    }
}
var mygenerator = generator("boomerang")
console.log(mygenerator.next())
console.log(mygenerator.next())
console.log(mygenerator.next())
mygenerator = generator("silly")
console.log(mygenerator.next())
console.log(mygenerator.next())

// 'this' with local/function scope
function Foo() {
    console.log(this.a);
}
var food = {a:"magical this"}
Foo()
Foo.call(food)

// this should print the window object, because scope of this here global, inherited from parent?
// function Bar() {
//     console.log(this);
// }
// Bar() //throws type error

// 'this' with object scope
var person = {
    name: 'Stranger',
    age: 24,
    get identity() {
        return {who:this.name, howOld:this.age}
    }
}
console.log(person.identity);

