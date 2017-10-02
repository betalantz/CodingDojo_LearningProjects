// -- standalone function ---
function sayName1(name){
    console.log("Hello my name is " + name);
};
// -- anonymous function, stored in a variable --
let sayName2 = function(name){
    console.log("Hello my name is " + name);
};
// -- standalone function, stored in a variable --
let sayName3 = function sayName3(name){
    console.log("Hello my name is " + name);
};


(function(){
    console.log("Hello world!");
})();

// arrow functions are anonymous functions without the 'function' keyword.
let sayName4 = (name) => { console.log("Hello my name is " + name) };
sayName4("Dolores");

sayName1("Fudrucker")
sayName2("Bob")
sayName3("Aurora")