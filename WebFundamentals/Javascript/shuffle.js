// Let's write that shuffle!

function shuffle(arr) {
    for(var i = arr.length-1; i >= 0; i--) {
        // find a random index in appropriate range
        var rdx = Math.floor(Math.random()*i);
        console.log(rdx);
        // swappify!
        var temp = arr[i];
        arr[i] = arr[rdx];
        arr[rdx] = temp;
    }
    return arr;
}
var test = [1,2,3,4,5,6,7,8,9];
console.log(shuffle(test));

// shuffle tester
// 0 - make a permutation dictionary
// 1 - loop the shuffle multiple times
// 2 - track the output
// 3 - report findings!
var pDict = {
    '123': 0,
    '132': 0,
    '213': 0,
    '231': 0,
    '312': 0,
    '321': 0
};

function arr2str(arr){
    var res = '';
    for(var i =0; i < arr.length; i++){
        res += arr=[i];
    }
    return res;
}

// console.log(arr2str(shuffle(test)))
// 'res' for 'result'

for(i = 0; i < 10000; i++){
    var res = shuffle(test);
    res = arr2str(res);
    pDict[res]+=1;
}

console.log(pDict);