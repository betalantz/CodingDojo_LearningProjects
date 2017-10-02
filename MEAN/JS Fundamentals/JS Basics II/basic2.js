function magic_multiply(x, y){
    if (x==0 && y==0){
        return "All inputs 0"
    } else if (typeof x == "object") { 

        for (var i = 0; i < x.length; i++) {
            x[i] *= y;
        }
        return x;
    } else if (typeof y == "string") {
        return "Error: Cannot multiply by string";
    } else if (typeof x == "string") {
        x = x.repeat(y)
        return x;
    } else {
    var x = x * y;
    return x;
    }
}
let test1 = magic_multiply(5, 2);
console.log(test1);
// => 10
let test2 = magic_multiply(0, 0);
console.log(test2);
// => "All inputs 0"
let test3 = magic_multiply([1, 2, 3], 2);
console.log(test3);
// => [2, 4, 6]
let test4 = magic_multiply(7, "three");
console.log(test4);
// => "Error: Can not multiply by string"
let test5 = magic_multiply("Brendo", 4);
console.log(test5);
// => "BrendoBrendoBrendoBrendo"

