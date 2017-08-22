function reverseArr(arr){
    var result = []
    for (var i = arr.length-1; i >=0; i--){
        result += arr[i];
    }
    console.log(result);
    return result;
}
reverseArr([1,2,3])