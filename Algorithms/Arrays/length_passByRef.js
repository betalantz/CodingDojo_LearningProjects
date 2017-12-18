function minToFront(arr){
    let min = arr[0]
    let idx = 0
    for(let j=1; j<arr.length; j++){
        if (arr[j]<min) {
            min=arr[j]
            idx=j
        }
    }
    for(let k=idx; k>0; k--){
        arr[k]=arr[k-1]
    }
    arr[0]=min
    return arr
}
let arr1 = [4,2,1,3,5]
let arr2 = [2,8,4,9,3]
console.log(minToFront(arr1));
console.log(minToFront(arr2));

function reverseArr(arr){
    let temp
    //set the number of iterations to half the array length, using Math.trund to handle odd numbered arr lengths
    let iter = Math.trunc(arr.length/2)
    //iterate through the array swaping the first and last values and then incrementing a counter which moves the swap progressively inward toward the center value (arrays of odd length leave the mid-value alone)
    for(let count = 0; count<iter; count++){
        temp=arr[count]
        arr[count]=arr[arr.length-1-count]
        arr[arr.length-1-count]=temp
    }
    return arr
}
let arr3 = [1,3,5,7,9]
let arr4 = [2,4,6,8,10,12]
console.log(reverseArr(arr3));
console.log(reverseArr(arr4));