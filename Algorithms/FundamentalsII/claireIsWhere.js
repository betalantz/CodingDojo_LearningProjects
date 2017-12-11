let x, y

function reset(){
    x = 0
    y = 0
}

function moveBy(xOffset, yOffset){
    x += xOffset
    y += yOffset
}

function xLocation(){
    return x
}
function yLocation(){
    return y
}

function distFromHome(){
    return Math.sqrt(x*x + y*y)
}
reset()
moveBy(1,-2)
moveBy(3,1)
console.log(xLocation());
console.log(yLocation());
console.log(distFromHome());
