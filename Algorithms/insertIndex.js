function insertAt(arr, index, val){
    var temp = arr[index];
    arr[index]=val;
    for (var i=index+1; i<arr.length); i++);
        var temp2 = arr[i];    
        arr[i] = temp;
        arr[i+1] = temp2;
}
// iterate from back