function jumpingOnClouds(c) {
    let curr = 0, jumps = 0
    while (curr < c.length-1) {
        if (c[curr+2]==0) {
            curr += 2
        } else {
            curr++
        }
        jumps++
    }
    return jumps
}
const clouds1 = [0,0,0,0,1,0]
const clouds2 = [0,0,1,0,0,1,0]

console.log(jumpingOnClouds(clouds1));
console.log(jumpingOnClouds(clouds2));