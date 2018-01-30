function shuffle(arr){
    let m = arr.length, temp, i;

    // While there remain elements to shuffle
    while(m){

        // Pick a remaining element
        i = Math.floor(Math.random()*m--);

        // And swap it with the current element.
        temp = arr[m]
        arr[m] = arr[i]
        arr[i] = temp
    }
    return arr
}
let arr1 = [1,2,3,4,5,6,7,8]
console.log(shuffle(arr1));