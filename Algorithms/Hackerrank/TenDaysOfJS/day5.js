function sides(literals, ...expressions) {
    const A = expressions[0]
    const P = expressions[1]
    const s1 = (P+(Math.sqrt((P**2)-16*A)))/4
    const s2 = (P-(Math.sqrt((P**2)-16*A)))/4
    return [s1, s2].sort()
}
function rectTemplateLiteral(s1, s2) {
    [s1, s2] = [s1, s2].sort();
    
    const [x, y] = sides`The area is: ${s1 * s2}.\nThe perimeter is: ${2 * (s1 + s2)}.`;
    
    console.log((s1 === x) ? x : -1);
    console.log((s2 === y) ? y : -1);
}
rectTemplateLiteral(10, 14)
rectTemplateLiteral(15, 8)

// Arrow functions
function modifyArray(nums) {
    nums.forEach((n, i) => {
        if (n%2==0){
            nums[i] = n*2
        } else {
            nums[i] = n*3
        }
    })
    return nums
}
// the seecond solution below is very consise, but .map() returns a new array; we want to modify the given array
function modifyArray2(nums) {
    return nums.map(n => n = (n%2) ? n*3: n*2);   
}
const n = [1,2,3,4,5]
modifyArray2(n);
console.log(n);
