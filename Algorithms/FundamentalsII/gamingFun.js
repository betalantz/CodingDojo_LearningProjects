function rollOne(){
    return Math.trunc(Math.random()*6)+1
}
function rollTwenty(){
    return Math.trunc(Math.random()*20)+1
}
console.log(rollOne());

function playFives(num){
    for(let i=0; i<num; i++){
        let n = rollOne()
        console.log(i+1, n);
        if (n==5){
            console.log("That's good luck!");
        }
    }
}
playFives(15)

function playStatistics(){
    let res = []
    for(let i=0; i<8; i++){
        let n = rollOne()
        res.push(n)
    }
    let min=res[0]
    let max=res[0]
    for(let j=1; j<res.length; j++){
        if (res[j]<min){
            min=res[j]
        }
        if (res[j]>max){
            max=res[j]
        }
    }
    console.log("Min: " + min);
    console.log("Max: " + max);
}
function playStatistics2(){
    let res = []
    for(let i=0; i<8; i++){
        let n = rollOne()
        res.push(n)
    }
    let min=res[0]
    let max=res[0]
    let sum=0
    for(let j=1; j<res.length; j++){
        sum+=res[j]
        if (res[j]<min){
            min=res[j]
        }
        if (res[j]>max){
            max=res[j]
        }
    }
    console.log("Min: " + min);
    console.log("Max: " + max);
    console.log("Sum: " + sum);
}
function playStatistics3(num){
    let res = []
    for(let i=0; i<num; i++){
        let n = rollOne()
        res.push(n)
    }
    let min=res[0]
    let max=res[0]
    let sum=0
    for(let j=1; j<res.length; j++){
        sum+=res[j]
        if (res[j]<min){
            min=res[j]
        }
        if (res[j]>max){
            max=res[j]
        }
    }
    console.log("Min: " + min);
    console.log("Max: " + max);
    console.log("Sum: " + sum);
}
function playStatistics4(num){
    let res = []
    for(let i=0; i<num; i++){
        let n = rollOne()
        res.push(n)
    }
    let min=res[0]
    let max=res[0]
    let sum=res[0]
    for(let j=1; j<res.length; j++){
        sum+=res[j]
        if (res[j]<min){
            min=res[j]
        }
        if (res[j]>max){
            max=res[j]
        }
    }
    let avg = sum/num
    console.log("Min: " + min);
    console.log("Max: " + max);
    console.log("Sum: " + sum);
    console.log("Avg: " + avg);
}
playStatistics()
playStatistics2()
playStatistics3(30)
playStatistics4(50)

function statsTilDoubles(){
    let flag = 1
    let res = []
    while (flag==1){
        res.push(rollTwenty())
        if (res.length>1 && (res[res.length-1]==res[res.length-2])){
                flag=0
        }
    }
    let min=res[0]
    let max=res[0]
    let sum=res[0]
    // console.log(1, sum);
    for(let j=1; j<res.length; j++){
        // console.log(j+1, res[j]);
        sum+=res[j]
        if (res[j]<min){
            min=res[j]
        }
        if (res[j]>max){
            max=res[j]
        }
    }
    let avg = sum/res.length
    console.log("Min: " + min);
    console.log("Max: " + max);
    console.log("No. of rolls: " + res.length);
    console.log("Avg: " + avg);
    // console.log("All results: ", res);
}
statsTilDoubles()