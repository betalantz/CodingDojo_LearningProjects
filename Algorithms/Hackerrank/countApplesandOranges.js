function countApplesAndOranges (s, t, a, b, apples, oranges) {
    let ap = 0
    let or = 0
    let apD = apples.map(x => x + a)
    let orD = oranges.map(y => y + b)
    for (var i of apD) {
        if (s <= i && i <= t) {
            ap++
        }
    }
    for (var i of orD) {
        if (s <= i && i <= t) {
            or++
        }
    }
    console.log(ap);
    console.log(or);
}
const s = 7
const t = 11
const a = 5
const b = 15
const apples = [-2,2,1]
const oranges = [5,-6]
countApplesAndOranges(s,t,a,b,apples,oranges);