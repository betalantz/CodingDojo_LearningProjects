function interleave(arr1, arr2) {
    const result = [];
    let i, l = Math.min(arr1.length, arr2.length)
    for (i = 0; i < l; i++){
        result.push(arr1[i], arr2[i]);
    }
    result.push(...arr1.slice(l), ...arr2.slice(l));
    return result
}
const array1 = [77,22,11,22]
const array2 = [2,6,7,2,6,2]
console.log(JSON.stringify(interleave(array1, array2)));