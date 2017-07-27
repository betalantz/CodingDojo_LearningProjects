function palindrome(str){
    var split = str.split();
    var reverse = [];
        for (var i = str.length-1; i >= 0; i--){
            reverse += split[i];
        }
    console.log(reverse);
    var back = reverse.join();
    if (str != back){
        return false;
    }
    return true;
}
palindrome("racecar");