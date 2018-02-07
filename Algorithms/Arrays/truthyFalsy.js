function shuffle(arr){
    let m = arr.length, temp, i;

    // While there remain elements to shuffle
    while(m){

        // Pick a remaining element
        i = Math.floor(Math.random()*m--);

        // And swap it with the current element.
        temp = arr[m]
        arr[m] = arr[i]
        arr[i] = temp
    }
    return arr
}
let arr1 = [1,2,3,4,5,6,7,8]
console.log(shuffle(arr1));

function removeRange(arr, start, end){
    for(let n=0; n<(end-start)+1; n++){
        for(let i=start; i<arr.length; i++){
            arr[i]=arr[i+1]
        }
        arr.pop()
    }
    return arr
}
// On^2
const arr2 = [20,30,40,50,60,70]
const arr3 = [20,30,40,50,60,70]
console.log(removeRange(arr2,2,4));
console.log(arr3.slice(2,4));
console.log(arr3.splice(2,3));
console.log(arr3);

function doubleTrouble(arr){
    // we need to clone each elem of orig array, so we memoize the orig arr.len
    const k=arr.length-1
    // this loop lets us advance the stopping index of our 'cloning' loop below, doubling it to account for our cloned elems
    for (let j=0; j<=k; j++){
        let m=j*2
        // finally, we iterate backwards through the array, moving each elem to the next index (lengthening the arr) and stopping when we've 'cloned' the last uncloned elem
        for(let p=arr.length-1; p>=m; p--){
            arr[p+1]=arr[p]
        }
    }
    return arr
}
// On^2
const arr4 = [4,'Ulysses',42,false]
console.log(doubleTrouble(arr4));
