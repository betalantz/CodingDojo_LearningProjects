/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(s) {
    const vowels = /[aeiou]/gi
    const cons = /[^aeiou]/gi
    const vRes = s.match(vowels)
    const cRes = s.match(cons)
    for (let v of vRes) {
        console.log(v)
    }
    for (let c of cRes) {
        console.log(c)
    }
}
const string1 = 'javascriptloops'
vowelsAndConsonants(string1)


