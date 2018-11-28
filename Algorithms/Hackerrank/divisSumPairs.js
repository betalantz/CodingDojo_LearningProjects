function divisibleSumPairs(k, ar) {
    let count = 0
    for (let i = 0; i < ar.length; i++){
        let j = ar.length-1
        while (j > i) {
            if ((ar[i]+ar[j])%k==0) {
                ++count
            }
            j--
        }
    }
    return count
}
const div = 3
const arr = [1,3,2,6,1,2]
console.log(divisibleSumPairs(div, arr))