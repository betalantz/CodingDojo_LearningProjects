function escapeWell(depth, climb, fall) {
    if (climb >= depth) return 1
    if (fall >= climb) {
        throw "No escape";
    }
    return Math.trunc(((depth-climb)/(climb-fall))+1)
}
console.log(escapeWell(10, 5, 3));
console.log(escapeWell(7, 5, 2));
console.log(escapeWell(9, 4, 3));
console.log(escapeWell(5, 6, 3));
try {
    console.log(escapeWell(5, 3, 6));
} catch(e) {
    console.log(e);
}