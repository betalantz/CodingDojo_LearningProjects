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
    //set the number of iterations to half the array length, using Math.trunc to handle odd numbered arr lengths
    let mid = Math.trunc(arr.length/2)
    //iterate through the array swaping the first and last values and then incrementing a counter which moves the swap progressively inward toward the center value (arrays of odd length leave the mid-value alone)
    for(let count = 0; count<mid; count++){
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

function filterRange(arr, min, max){
    for (let n=0; n<arr.length; n++){
        if (arr[n]<min || arr[n]>max){
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
let arr7=[10,3,7,2,1,9]
console.log(filterRange(arr7,3,7));

function arrConcat(a1, a2){
    let res=[]
    for (let j=0; j<a1.length; j++){
        res.push(a1[j])
    }
    for (let k=0; k<a2.length; k++){
        res.push(a2[k])
    }
    return res
}
let arr8=['r','u','a','d','d']
console.log(arrConcat(arr1,arr8));

function skyline(arr){
    let max=0
    let res=[]
    for (let x=0; x<arr.length; x++){
        if (arr[x]>max){
            max=arr[x]
            res.push(arr[x])
        }
    }
    return res
}
console.log(skyline([-1,1,1,7,3]));