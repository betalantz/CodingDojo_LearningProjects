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

function getGrade(score) {
    let grade;
    if (25 < score && score <= 30){
        grade = 'A'
    } 
    else if (20 < score && score <= 25){
        grade = 'B'
    }
    else if (15 < score && score <= 20) {
        grade = 'C'
    }
    else if (10 < score && score <= 15) {
        grade = 'D'
    }
    else if (5 < score && score <= 10){
        grade = 'E'
    }
    else {
        grade = 'F'
    }
    return grade;
}
console.log(getGrade(11));

function getLetter(s) {
    let letter;
    let val = s[0];
    const setA = /[aieou]/i
    const setB = /[bcdfg]/i
    const setC = /[hjklm]/i
    const setD = /[npqrstvwxyz]/i
    switch (true) {
        case setA.test(val):
            letter = 'A'
            break
        case setB.test(val):
            letter = 'B'
            break
        case setC.test(val):
            letter = 'C'
            break
        case setD.test(val):
            letter = 'D'
            break
    }
    return letter;
}
const str = 'adfgt'
const str1 = 'fiosn'
const str2 = 'mushi'
const str3 = 'zeta'
console.log(getLetter(str));
console.log(getLetter(str1));
console.log(getLetter(str2));
console.log(getLetter(str3));