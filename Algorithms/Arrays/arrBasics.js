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