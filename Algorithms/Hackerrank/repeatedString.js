function repeatedString(s, n) {
    const repetitions = Math.ceil(n/s.length)
    let str = ""
    let a_count = 0
    for (let i = 0; i < repetitions; i++) {
        str += s
    }
    for (let j = 0; j < n; j++) {
        if (str[j] == 'a') {
            a_count++
        }
    }
    return a_count
}
const s1 = 'aba'
const n1 = 10
const s2 = 'a'
const n2 = 10000
const s3 = 'slicker'
const n3 = 100000
console.log(repeatedString(s1, n1));
console.log(repeatedString(s2, n2));
console.log(repeatedString(s3, n3));

function repeatedStringRefactored(s, n) {
    let res = []
    for (let i = 0; i < n; i++) {
        res.push(s[i%s.length]) 
    }
    const result = res.filter(char => char == 'a')
    return result.length
}

console.log(repeatedStringRefactored(s1, n1));
console.log(repeatedStringRefactored(s2, n2));
console.log(repeatedStringRefactored(s3, n3));