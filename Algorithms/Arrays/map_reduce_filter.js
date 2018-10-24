// an example comparing loop to filter
function deduplicate(arr){
    const models = []
    for (let i=0; i<arr.length; i++){
        if(arr.indexOf(arr[i])===i){
            models.push(arr[i])
        }
    }
    return models
}
const arr1 = [2,6,9,2,7,7,8,6]
console.log(deduplicate(arr1));

function dedup_filter(arr){
    let uniqueProducts = arr.filter(function(elem, i, arr){
        return arr.indexOf(elem)===i
    })
    return uniqueProducts
}
console.log(dedup_filter(arr1));

// map(): for translating/ping all elems in arr to another set of values
// array.(function(currentValue, index, arr), thisValue) #index, arr, and thisValue are optional
var temps_F = [0, 32, 45, 50, 75, 80, 99, 120];

function convertFtoC(fahrenheit){
    return fahrenheit.map(elem => Math.round((elem-32)*5/9))
}
console.log(convertFtoC(temps_F));


var oldArr = [{first_name:"Colin",last_name:"Toh"},{first_name:"Addy",last_name:"Osmani"},{first_name:"Yehuda",last_name:"Katz"}];

function getNewArr(arr){
        
    return arr.map(function(item,index){
        item.full_name = [item.first_name,item.last_name].join(" ");
        console.log(item.full_name);
        return item;
    });
    
}
console.log(getNewArr(oldArr));

// filter(): removes unwanted elems from arr based on condition
// array.filter(function(currentValue, index, arr), thisValue) #index, arr, and thisValue are optional
// example also uses indexOf() which returns the first index (only) at which a given elem cna be found in arr, or -1 if not found
function removeDups(arr){
    const uniqueArr = arr.filter((elem, idx, arr) => arr.indexOf(elem)===idx)
    return uniqueArr
}
const arr2 = [1,1,2,2,3,3,4,4,5,5]
console.log(removeDups(arr2));

var arr = [
    {"name":"apple", "count": 2},
    {"name":"orange", "count": 5},
    {"name":"pear", "count": 3},
    {"name":"orange", "count": 16},
];
    
// var newArr = arr.filter(function(item){
//     return item.name === "orange";
// });
var newArr = arr.filter((item)=>item.name==='orange')  //ECMA6 with arrow function

console.log("Filter results:",newArr);

// reduce(): finds a cumulative or concatenated value base on elements across the array
// array.reduce(function(total, currentValue, currentIndex, arr), initialValue) # currIndex, arr and initialValue are optional. 'total' is the accumulator
// array.reduce(function(prevVal, val, index, array) {...}, initialValue);
var rockets = [
    { country:'Russia', launches:32 },
    { country:'US', launches:23 },
    { country:'China', launches:16 },
    { country:'Europe(ESA)', launches:7 },
    { country:'India', launches:4 },
    { country:'Japan', launches:3 }
];
let launchSum = rockets.reduce(function(prevVal, val) {
    return prevVal + val.launches;
}, 0);
// ES6
// rockets.reduce((prevVal, val)=>prevVal + val.launches, 0)
console.log("Total launches:", launchSum);

var arr3 = ["apple","orange","apple","orange","pear","orange"];

function getWordCnt(){
    return arr3.reduce(function(prev,next){
        // prev[next] = (prev[next] + 1) || 1;
        prev[next] = (prev[next] || 0) + 1;
        return prev;
    },{});
}

console.log(getWordCnt());
/*
* Difference between not passing any parameters
* and passing in a additional parameter into `reduce()`
*/

var arr4 = ["apple","orange"];

function noPassValue(){
    return arr4.reduce(function(prev,next){
        console.log("prev:",prev);
        console.log("next:",next);
        
        return prev + " " +next;
    });
}
function passValue(){
    return arr4.reduce(function(prev,next){
        console.log("prev:",prev);
        console.log("next:",next);
        
        prev[next] = 1;
        return prev;
    },{});
}

console.log("No Additional parameter:",noPassValue());
console.log("----------------");
console.log("With {} as an additional parameter:",passValue());

var arr5 = ["apple","orange","apple","pear"];

function getWordCnt2(){
    return arr5.reduce(function(prev,next,index){
        console.log("<b>Iteration "+index+"</b>");
        console.log("prev:",prev);
        console.log("next:",next);
        
        prev[next] = ++prev[next] || 1;
        console.log("Passing this to the 'prev' of the next iteration if any:",prev);
        console.log("---------------");
        return prev;
    },{});
}

console.log("<b>Final Object:</b>",getWordCnt2());

// forEach(): executes a provided function once per array elem
// array.forEach(function(currentValue, index, arr), thisValue) where only currentValue is required
arr3.forEach((item)=>console.log(item))

function printAllPossibleOrderedPairs(arrayOfItems) {
    arrayOfItems.forEach(function(firstItem) {
        arrayOfItems.forEach(function(secondItem) {
            console.log(firstItem, secondItem);
        });
    });
}
const arr6 = [1,3,5,7,9]
console.log(printAllPossibleOrderedPairs(arr6));