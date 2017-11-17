function print1To255(){
    for (var i=1; i<256; i++){
        console.log(i);
    }
}
print1To255()

function printIntsAndSum0To255(){
    let sum = 0
    for (let i=1; i<256; i++){
        console.log(i);
        sum += i
        console.log(sum);
    }
}
printIntsAndSum0To255()

function printMaxOfArray(arr){
    let max = arr[0]
    for (let i=1; i<arr.length; i++){
        let temp = arr[i]
        if (temp>max) {
            max=temp
        }
    }
    console.log(max);
}
const arr = [21,9,0,45,-3,18,101]
printMaxOfArray(arr)

function returnOddsArray1To255(){
    let oddArr = []
    for (let i=1; i<256; i++){
        if (i%2!==0){
            oddArr.push(i)
        }
    }
    return oddArr
}
console.log(returnOddsArray1To255());

function returnArrayCountGreaterThanY(arr, y){
    let count = 0
    for (let i=1; i<arr.length; i++){
        if (arr[i]>y){
            count++
        }
    }
    return count
}
console.log(returnArrayCountGreaterThanY(arr, 11));

function printMaxMinAverageArrayVals(arr){
    let min = arr[0]
    let max = arr[0]
    let sum = arr[0]
    for (let i = 1; i<arr.length; i++){
        let temp = arr[i]
        if(temp < min){
            min = temp
        }
        if (temp > max) {
            max = temp
        }
        sum += temp
    }
    let avg = sum/arr.length
    console.log("The min value is " + min);
    console.log("The max value is " + max);
    console.log("The avg value is " + avg);
}
printMaxMinAverageArrayVals(arr)

function swapStringForArrayNegativeVals(arr){
    for (let i = 0; i < arr.length; i++){
        if (arr[i]<0){
            arr[i] = 'Dojo'
        }
    }
    return arr
}
console.log(swapStringForArrayNegativeVals(arr));

function printOdds1To255(){
    for (let i=1; i<256; i++){
        if (i%2!==0){
            console.log(i);
        }
    }
}
printOdds1To255()

function printArrayVals(arr){
    for (let i = 0; i < arr.length; i++){
        console.log(arr[i]);
    }
}
printArrayVals(arr)

function squareArrayVals(arr){
    for (let i = 0; i < arr.length; i++){
        arr[i] *= arr[i]
    }
    return arr
}
const arr2 = [3,7,34,0,11,-4,204]
console.log(squareArrayVals(arr2));

function zeroOutArrayNegativeVals(arr){
    for (let i = 0; i < arr.length; i++){
        if (arr[i]<0){
            arr[i] = 0
        }
    }
    return arr
}
const arr3 = [5,27,99,-22,0,34,-4,456]
console.log(zeroOutArrayNegativeVals(arr3));

function shiftArrayValsLeft(arr){
    for (let i = 0; i < arr.length; i++){
        arr[i] = arr[i+1]
    }
    arr[arr.length-1]=0
    return arr
}
console.log(shiftArrayValsLeft(arr2));