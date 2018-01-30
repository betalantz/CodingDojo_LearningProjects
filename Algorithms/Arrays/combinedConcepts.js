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