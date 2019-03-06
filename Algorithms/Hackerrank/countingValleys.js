function countingValleys(s) {
    let valleys = 0
    let wasInValley = false
    let altitude = 0
    for (const step of s) {
        altitude = step == 'D' ? altitude-1 : altitude+1
        if (altitude == 0 && wasInValley) {
            valleys += 1
        }
        wasInValley = altitude < 0 ? true : false
    }
    return valleys
}
const hike1 = 'DDUUUUDD'
const hike2 = 'UDDDUDUU'
const hike3 = 'UUUDDUDD'
const hike4 = 'DDDUDUUUDDUUU'
console.log(countingValleys(hike1));
console.log(countingValleys(hike2));
console.log(countingValleys(hike3));
console.log(countingValleys(hike4));
console.log(countingValleysRefactored(hike1));
console.log(countingValleysRefactored(hike2));
console.log(countingValleysRefactored(hike3));
console.log(countingValleysRefactored(hike4));

// can eliminate the 'wasInValley' flag
function countingValleysRefactored(s) {
    let valleys = 0
    let altitude = 0
    for (const step of s) {
        altitude = step == 'D' ? altitude-1 : altitude+1
        if (altitude == 0 && step == 'U') {
            valleys += 1
        }
    }
    return valleys
}