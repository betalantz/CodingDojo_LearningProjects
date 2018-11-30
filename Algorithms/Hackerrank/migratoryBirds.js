function migratoryBirds(arr) {
    let totals = {}
    let maxType;
    let maxFreq = 0
    for (const type of arr) {
        if (totals[type]) {
            totals[type] += 1
        } else {
            totals[type] = 1
        }
    };
    for (const high in totals) {
        if (totals[high] > maxFreq) {
            maxFreq = totals[high]
            maxType = high
        } else if (totals[high] = maxFreq){
            if (maxType > high) {
                maxType = high
            }
        }
    }
    return maxType
}
const set1 = [1,4,4,4,5,3]
const set2 = [1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4]
console.log(migratoryBirds(set1));
console.log(migratoryBirds(set2));