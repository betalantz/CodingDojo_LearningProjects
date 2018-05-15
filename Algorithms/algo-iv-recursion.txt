function rSum(num, total = 0){
    if(num>0){
        total += num
        return rSum(num-1, total)
    }
    return total
}
console.log(rSum(5));

let counter = 0
function rSigma(n) {
    if (n<=0) {return 0}
    
    if (counter++ > 1000) { throw new Error('infinite loop')}

    return rSigma(n-1) + Math.floor(n)
}
console.log(rSigma(5));
console.log(rSigma(2.5));
console.log(rSigma(0));

function rFib(num){
    if(num < 1){ return 0 }
    if(num===1){ return 1 }
    
    return rFib(num-1) + rFib(num-2)
}
console.log(rFib(3));

function floodFill(canvas2D, x, y, newColor, oldColor){
    let canvas2DWidth = canvas2D[0].length;
    let canvas2DHeight = canvas2D.length;
    if (!oldColor) {
        oldColor = canvas2D[y][x]
    }
    if (canvas2D[y][x] != oldColor){
        return
    }
    canvas2D[y][x] = newColor
    if (x > 0) {
        floodFill(canvas2D, x-1, y, newColor, oldColor)
    }
    if (y > 0) {
        floodFill(canvas2D, x, y-1, newColor, oldColor)
    }
    if (x<canvas2DWidth-1) {
        floodFill(canvas2D, x+1, y, newColor, oldColor)
    }
    if (y<canvas2DHeight-1) {
        floodFill(canvas2D, x, y+1, newColor, oldColor)
    }
}
const canvas1 = [  
    [3,2,3,4,3],
    [2,3,3,4,0],
    [7,3,3,4,1],
    [6,5,3,4,1],
    [1,2,3,3,3]  
]
floodFill(canvas1, 2, 2, 9)
console.log(canvas1);
floodFill(canvas1, 3, 1, 8)
console.log(canvas1);