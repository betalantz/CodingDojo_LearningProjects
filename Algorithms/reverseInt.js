function reverseInt(num) {
    var int = num;
    var rev = 0;
    while (int > 0) {
        var a = int%10;
        rev = rev*10+a;
        int = (int - (int%10))/10;
    }
    return rev;
}
console.log(reverseInt(359));