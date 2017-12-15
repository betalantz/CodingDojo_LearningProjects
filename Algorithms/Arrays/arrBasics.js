function pushFront(arr, val){
    for(let k=arr.length; k>0; k--){
        arr[k]=arr[k-1]
    }
    arr[0]=val
    return arr
}

function insertAt(arr,idx,val){
    for(let k=arr.length; k>idx; k--){
        arr[k]=arr[k-1]
    }
    arr[idx]=val
    return arr
}

function popFront(arr){
    let val = arr[0]
    for(let k=0; k<arr.length; k++){
        arr[k]=arr[k+1]
    }
    arr.pop()
    console.log(arr);
    return val
}

function removeAt(arr,idx){
    let val = arr[idx]
    for(let k=idx; k<arr.length; k++){
        arr[k]=arr[k+1]
    }
    arr.pop()
    console.log(arr);
    return val
}

const myArr = [2,3,55,8,0]
console.log(pushFront(myArr,12));
console.log(insertAt(myArr,2,100));
console.log(popFront(myArr));
console.log(removeAt(myArr,3));

function swapPairs(arr){
    let temp
    for (let i=0; i<arr.length; i++){
        if ((i+1)%2!=0){
            temp = arr[i]
        } else {
            arr[i-1]=arr[i]
            arr[i]=temp
        }
    }
    return arr
}
let arr1 = [1,2,3,4]
let arr2 = [true,'Nathan',42]
console.log(swapPairs(arr1));
console.log(swapPairs(arr2));

function removeDuplicates(arr){
    for(let k=0; k<arr.length; k++){
        if (arr[k]==arr[k+1]){
            removeAt(arr,k)
        }
    }
    return arr
}
let arr3 = [4,5,6,7,7,8,9,9,10]
console.log(removeDuplicates(arr3));