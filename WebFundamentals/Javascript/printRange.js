function printRange(start, end, skip){
    var x = start;
    while(x<end){
        console.log(x);
        x+=skip;
    }
}
printRange(3,23,3);