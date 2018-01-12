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

function rotateArr(arr, shiftBy){
    let memo
    for (let g=1; g<=shiftBy; g++){
        memo=arr[arr.length-1]
        for (let f=arr.length-1; f>0; f--){
            arr[f]=arr[f-1]
        }
        arr[0]=memo
    }
    return arr
}
let arr5=[6,7,8,9,10]
console.log(rotateArr(arr5,2));

function rotateArr2(arr, shift){
    shift = shift % arr.length
    let val
    let index = 0
    let temp = arr[0]
    for (let i=1; i<=arr.length; i++){
        val=arr[(index+shift)%arr.length]
        arr[(index+shift)%arr.length]=temp
        temp = val
        index=(index+shift)%arr.length
    }
    return arr
}
let arr6=[1,2,3,4,5,6,7]
console.log(rotateArr2(arr6,9));