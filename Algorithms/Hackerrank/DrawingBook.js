function drawingBook(n,p) {
    if (p > n/2) {
        if (n%2!==0 && n-p<=1) {
            return 0
        } else if (n%2!==0) {
            return Math.floor((n-p)/2)
        } else {
            return Math.ceil((n-p)/2)
        }
    } else {
        return Math.floor(p/2)
    }
}
console.log('Solution 1:');
console.log(drawingBook(6,2));
console.log(drawingBook(5,4));
console.log(drawingBook(10,6));
console.log(drawingBook(9,3));
console.log(drawingBook(5,1));
console.log(drawingBook(7,4));
console.log('Solution 2:');
console.log(drawingBook2(6,2));
console.log(drawingBook2(5,4));
console.log(drawingBook2(10,6));
console.log(drawingBook2(9,3));
console.log(drawingBook2(5,1));
console.log(drawingBook2(7,4));
console.log('Solution 3:');
console.log(drawingBook3(6,2));
console.log(drawingBook3(5,4));
console.log(drawingBook3(10,6));
console.log(drawingBook3(9,3));
console.log(drawingBook3(5,1));
console.log(drawingBook3(7,4));

function drawingBook2(n,p){
    if ( p <= ( n / 2 ))
    {
        return Math.floor(p/2);
    }
    return Math.floor(( ( n-p ) + ( 1 - n%2) ) / 2);
}

function drawingBook3(n,p) {
    return p/2 < n/2 - p/2 ? Math.floor(p/2) : Math.floor(n/2 - p/2);
}