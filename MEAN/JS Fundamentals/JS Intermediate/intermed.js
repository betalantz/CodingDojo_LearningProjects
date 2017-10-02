function starString(item) {
    if (item.constructor == String) {
        var x = item[0].toLowerCase();
        var k = x.repeat(item.length);
    } else {
        var x = "*";
        var k = x.repeat(item);
    }
    return k;
}
function drawStars(arr) {
    for (y of arr) {
        let w = starString(y);
        console.log(w);
    }
}


let stars = starString(8)
console.log(stars)

let x = [4, 6, 1, 3, 5, 7, 25]
let q = [4, "Tom", 1, "Michael", 5, 7, "Jimmy Smith"]
drawStars(x)
drawStars(q)



