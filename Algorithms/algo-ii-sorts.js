function quicksortBasic(arr) {
    if(arr.length < 2) {
        return arr;
    }
    
    const pivot = arr[0];
    const lesser = [];
    const greater = [];

    for(let i = 1; i < arr.length; i++) {
        if(arr[i] < pivot) {
            lesser.push(arr[i]);
        } else {
            greater.push(arr[i]);
        }
    }
    return quicksortBasic(lesser).concat(pivot, quicksortBasic(greater));
}

const arr1 = [7,2,4,9,5,3,1,8]

console.log(quicksortBasic(arr1));
//console.log(quicksortBasic(arr1.slice()));