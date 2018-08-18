function diagonalDifference(a) {
    let primary = 0
    let secondary = 0
    let pidx = Math.sqrt(a.length)+1
    let sidx = Math.sqrt(a.length)-1
    for(let j=0; j<pidx-1; j++){
        primary += a[j*pidx]
    }
    for(let k=1; k<=sidx+1; k++){
        secondary += a[k*sidx]
    }
    return Math.abs(primary-secondary)
}

function diagonalDifference3(a){
    let n = a.length
    var backSlash = 0;
    var forwardSlash = 0;
    for (var i = 0; i < n; i++) {
        for (var j = 0; j < n; j++) {
            if (i == j) {
             backSlash += a[i][j];
            }
            if (i + j == n-1) {
            forwardSlash += a[i][j];
            }   
        }
    }
    return Math.abs(backSlash-forwardSlash)
}

let a1 = [11,2,4,4,5,6,10,8,-12]
let a2 = [[11,2,4],[4,5,6],[10,8,-12]]
console.log(diagonalDifference3(a2));

function miniMaxSum(arr) {
    arr.sort((a, b)=>{return a-b});
    const reducer = (accum, curr) => accum + curr
    const mini = arr.slice(0, -1).reduce(reducer);
    const max = arr.slice(1).reduce(reducer);
    return mini + " " + max
}
const a3 = [1,2,3,4]
const a4 = [1,3,5,7,9]
console.log(miniMaxSum(a3));
console.log(miniMaxSum(a4));

function timeConversion(str){
    if (!str.includes("P")){
        if (parseInt(str, 10)==12){
            console.log("00"+str.slice(2, -2));
        } else {
            console.log(str.slice(0, -2));
        }
    } else {
        let conv = parseInt(str, 10) + 12
        if (conv == 24) {conv = 12}
        let hour = conv.toString()
        console.log(hour + str.slice(2, -2));
    }
}
const time1 = "07:05:45PM"
const time2 = "08:31:29AM"
const time3 = "12:00:00PM"
const time4 = "12:00:00AM"
timeConversion(time1);
timeConversion(time2);
timeConversion(time3);
timeConversion(time4);