/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let n=nums.length;
    let xor=0
    for(let i=0;i<n;i++){
        xor^=nums[i]
    }
    
    return xor;
};