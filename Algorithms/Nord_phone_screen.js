function sumArray(arr){
    let sum = 0
    for (let i=0; i<arr.length; i++){
      sum += arr[i]
    }
    return sum
}
let arr1= [3,4,5]
console.log(sumArray(arr1))

function fibonnaci(n){
let res=[1,1]
// conditions to handle n of 1 or 2 added post interview
if (n==2){
    return res
} else if (n==1){
    return 1
}
while (n>2){
    let m=res.length
    let val = res[m-1]+res[m-2]
    res.push(val)
    n--
}
return res
}
console.log(fibonnaci(1))

// Interviewer was going to ask me a question with reduce(), but I had to admit I didn't know how to use :(
// Here is my first implementation of .reduce()
const arr2 = [3.5,8,1,12]
const average = arr2.reduce((sum, val, index, array) => {
    sum += val;
    if (index===array.length){
        return sum/array.length
    } else{
        return sum
    }
})
console.log(average);