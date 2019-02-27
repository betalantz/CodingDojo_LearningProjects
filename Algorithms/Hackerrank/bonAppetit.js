function bonAppetit(bill, k, b) {
    const adjusted = Array.from(bill)
    adjusted.splice(k, 1)
    const actual = (adjusted.reduce((acc, item) => acc + item))/2
    if (b===actual) {
        return "Bon Appetit!";
    } else {
        return b - actual
    }
}
/* where `bill` is an array of all items billed,
`k` is the item Anna didn't eat,
`b` is the amount Anna was charged */
const bill1 = [3, 10, 2, 9]
const k1 = 1
const b1 = 12
const b2 = 7
console.log(bonAppetit(bill1, k1, b1));
console.log(bonAppetit(bill1, k1, b2));