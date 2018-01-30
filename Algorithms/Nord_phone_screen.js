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
    while (n>2){
      let m=res.length
      let val = res[m-1]+res[m-2]
      res.push(val)
      n--
    }
    return res
  }
  console.log(fibonnaci(1))