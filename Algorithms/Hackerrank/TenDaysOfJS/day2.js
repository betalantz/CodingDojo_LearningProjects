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
