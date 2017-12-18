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
    
}