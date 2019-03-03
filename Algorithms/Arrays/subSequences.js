function subSequences(s, t) {
    let string = s.split(' ')
    const subs = t.split(' ')
    for (let sub of subs) {
        for (let [index, match] of string.entries()) {
            if (sub == match) {
                string.splice(index, 1)
            }
        }
    }
    return string.join(' ')
}
const string1 = "I am using Hackerrank to improve my coding"
const sub1 = "am Hackerrank to improve"
console.log(subSequences(string1, sub1));