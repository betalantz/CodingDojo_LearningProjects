function repeatedString(s, n) {
    const repetitions = Math.ceil(n/s.length)
    let str = ""
    let a_count = 0
    for (let i = 0; i < repetitions; i++) {
        str += s
    }
    console.log(str);
    for (let j = 0; j < n; j++) {
        if (str[j] == 'a') {
            a_count++
        }
    }
    return a_count
}
const s1 = 'aba'
const n1 = 10
console.log(repeatedString(s1, n1));