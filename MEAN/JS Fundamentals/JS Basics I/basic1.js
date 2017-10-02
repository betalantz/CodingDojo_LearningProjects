// Basic 1
// x = [];
// console.log(x);
// x.push('coding', 'dojo', 'rocks')
// x.pop()
// console.log(x)

//Basic 2
// const y = [];
// console.log(y);
// y.push(88)
// console.log(y)

// Basic 3
// let z = [9, 10, 6, 5, -1, 20, 13, 2]
// for (let i = 0; i < z.length; i++){
//     console.log(z[i]);
// }
// for (let j = 0; j < z.length-1; j++){
//     console.log(z[j]);
// }

//Basic 4
// let names = ['Kadie', 'Joe', 'Fritz', 'Pierre', 'Alphonso']
// for (item of names) {
//     if (item.length == 5){
//         console.log(item);
//     }
// }
 
// Basic 5 (for more on uppercasing strings in JavaScript, see https://www.w3schools.com/jsref/jsref_touppercase.asp)
function yell(string) {
    let res = string.toUpperCase();
    console.log(res);
    return res;
}
yell("fire")

