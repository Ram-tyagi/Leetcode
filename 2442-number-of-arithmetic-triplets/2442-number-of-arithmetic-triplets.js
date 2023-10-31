/**
 * @param {number[]} nums
 * @param {number} diff
 * @return {number}
 */
var arithmeticTriplets = function(nums, diff) {
     let hash = new Map();
    let count = 0;

    for(let i=0; i<nums.length; i++){
        let temp = nums[i] - diff;
        
        if(hash.has(temp) && hash.has(temp - diff)){
            count++;
        }
        hash.set(nums[i]);
    }
    
    return count; 
};