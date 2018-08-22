function kangaroo(x1, v1, x2, v2){
    let i = 1
    while (i < 10000) {
        x1 += v1;
        x2 += v2;
        if (x1 == x2) {
            return 'YES'
        }
        i++
    }
    return 'NO'
}
let x1 = 1, v1 = 3, x2 = 4, v2 = 2
console.log(kangaroo(x1, v1 , x2, v2));