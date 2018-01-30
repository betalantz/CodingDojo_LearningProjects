function removeNegatives(arr){
    for (let n=0; n<arr.length; n++){
        if (arr[n]<0){
            // TODO do not use nested loops
            for (let i=n; i<arr.length; i++){
                if (i==arr.length-1){
                    arr.pop()
                } else {
                    arr[i]=arr[i+1]
                }
            }
        }
    }
    return arr
}
let arr1=[3,2,-4,0,-9,20]
console.log(removeNegatives(arr1));

function arrNthToLast(arr, n){
    if (n>arr.length){
      return null
    } else {
      return arr[arr.length-n]
    }
}
let arr2 = [5,2,3,6,4,9,7]
console.log(arrNthToLast(arr2,3));

// how to implement below without sorting
function arrNthHighest(arr, n){
    if (n>arr.length){
        return null
    }
    let sorted = arr.sort(function(a,b){return b-a})
    return sorted[n-1]
}
let arr3 = [42,1,4,Math.PI,7]
console.log(arrNthHighest(arr3,2));
console.log(arrNthHighest(arr3,6));

// function isCreditCardValid(digitArr){

// }