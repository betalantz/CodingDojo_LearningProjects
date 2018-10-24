function doSomething(){}
doSomething.prototype.foo = "bar";
var doSomeInstancing = new doSomething();
doSomeInstancing.prop = "some value";
console.log("doSomeInstancing.prop:      " + doSomeInstancing.prop);
console.log("doSomeInstancing.foo:       " + doSomeInstancing.foo);
console.log("doSomething.prop:           " + doSomething.prop);
console.log("doSomething.foo:            " + doSomething.foo);
console.log("doSomething.prototype.prop: " + doSomething.prototype.prop);
console.log("doSomething.prototype.foo:  " + doSomething.prototype.foo);

var animalGroups = {
  MAMMAL: 1,
  REPTILE: 2,
  AMPHIBIAN: 3,
  INVERTEBRATE: 4
};
function Animal(name, type) {
  this.name = name;
  this.type = type;
}
var dog = new Animal("dog", animalGroups.MAMMAL);
var crocodile = new Animal("crocodile", animalGroups.REPTILE);
Animal.prototype.shout = function() {
    console.log(this.name + ' is ' + this.sound + 'ing...');
}
function Dog(name, type) {
   Animal.call(this, name, type);
   this.sound = "bow";
}
// Link prototype chains
Dog.prototype = Object.create(Animal.prototype);
var pet = new Dog("germanShepard", animalGroups.MAMMAL);
console.log(pet); // returns Dog {name: "germanShepard", type: 1, sound: "bow"}
pet.shout(); // Throws error before linking the prototype chain in l.32
console.log(pet.constructor); // returns Animal
console.log(Dog.prototype.constructor)
// Dog.prototype.constructor = Dog; // author recommends setting child class constructors to self (??)

class Polygon {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}

class Square extends Polygon {
  constructor(sideLength) {
    super(sideLength, sideLength);
  }
  get area() {
    return this.height * this.width;
  }
  set sideLength(newLength) {
    this.height = newLength;
    this.width = newLength;
  }
}

var square = new Square(2);


// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain#Summary_of_methods_for_extending_the_protoype_chain
// 4 methods for extending prototype chain (same results)
// 1. new initialization
function foo(){}
foo.prototype = {
  foo_prop: "foo val"
};
function bar(){}
var proto = new foo;
proto.bar_prop = "bar val";
bar.prototype = proto;
var inst = new bar;
console.log(inst.foo_prop);
console.log(inst.bar_prop);

// 2. Object.create
function foo2(){}
foo2.prototype = {
  foo2_prop: "foo2 val"
};
function bar2(){}
var proto = Object.create(
  foo2.prototype
);
proto.bar2_prop = "bar2 val";
bar2.prototype = proto;
var inst = new bar2;
console.log(inst.foo2_prop);
console.log(inst.bar2_prop);

// 3. Object.setPrototypeOf
function foo3(){}
foo3.prototype = {
  foo3_prop: "foo3 val"
};
function bar3(){}
var proto = {
  bar3_prop: "bar3 val"
};
Object.setPrototypeOf(
  proto, foo3.prototype
);
bar3.prototype = proto;
var inst = new bar3;
console.log(inst.foo3_prop);
console.log(inst.bar3_prop);

// 4. __proto__  (deprecated, low permformant)
function foo4(){}
foo4.prototype = {
  foo4_prop: "foo4 val"
};
function bar4(){}
var proto = {
  bar4_prop: "bar4 val",
  __proto__: foo4.prototype
};
bar4.prototype = proto;
var inst = new bar4;
console.log(inst.foo4_prop);
console.log(inst.bar4_prop);

// or with nested __proto__s
// var inst = {
//   __proto__: {
//     bar_prop: "bar val",
//     __proto__: {
//       foo_prop: "foo val",
//       __proto__: Object.prototype
//     }
//   }
// };
// console.log(inst.foo_prop);
// console.log(inst.bar_prop)