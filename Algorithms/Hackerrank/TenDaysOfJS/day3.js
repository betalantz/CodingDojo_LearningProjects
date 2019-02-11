function getSecondLargest(nums) {
    let max = nums[0]
    if (nums.length == 1) { return max }
    let second = nums[1] < max ? nums[1] : max
    for (let i of nums) {
        if (i > max) { 
            second = max
            max = i 
        }
        if (i > second && i <  max) { second = i }
    }
    return second
}
const n = [2,3,6,6,5]
const n1 = [5]
const n2 = [1,7]
const n3 = [9,4]
const n4 = [10,9,9,8,11,8,0,9,1]
console.log(getSecondLargest(n));
console.log(getSecondLargest(n1));
console.log(getSecondLargest(n2));
console.log(getSecondLargest(n3));
console.log(getSecondLargest(n4));