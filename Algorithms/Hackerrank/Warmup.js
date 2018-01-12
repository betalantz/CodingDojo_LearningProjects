function diagonalDifference(a) {
    let primary = 0
    let secondary = 0
    let pidx = Math.sqrt(a.length)+1
    let sidx = Math.sqrt(a.length)-1
    for(let j=0; j<pidx-1; j++){
        primary += a[j*pidx]
    }
    for(let k=1; k<=sidx+1; k++){
        secondary += a[k*sidx]
    }
    return Math.abs(primary-secondary)
}

function diagonalDifference3(a){
    let n = a.length
    var backSlash = 0;
    var forwardSlash = 0;
    for (var i = 0; i < n; i++) {
        for (var j = 0; j < n; j++) {
            if (i == j) {
             backSlash += a[i][j];
            }
            if (i + j == n-1) {
            forwardSlash += a[i][j];
            }   
        }
    }
    return Math.abs(backSlash-forwardSlash)
}

let a1 = [11,2,4,4,5,6,10,8,-12]
let a2 = [[11,2,4],[4,5,6],[10,8,-12]]
console.log(diagonalDifference3(a2));