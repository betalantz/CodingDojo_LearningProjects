var productExceptSelf = function(nums) {
    let output = []
    let i=0, Rprod, Lprod
    while(i<nums.length){
        let Rprod = 1
        let Lprod =1
        if(i<nums.length-1){
            for(let x=i+1; x<nums.length; x++){
                Rprod *= nums[x]
            }
        } 
        if(i>0){
            for(let y=i-1; y>=0; y--){
                Lprod *= nums[y]
            }
        } 
        let res = Rprod * Lprod
        output.push(res)
        i++
    }
    return output
};
let arr = [1,2,3,4]
console.log(productExceptSelf(arr));