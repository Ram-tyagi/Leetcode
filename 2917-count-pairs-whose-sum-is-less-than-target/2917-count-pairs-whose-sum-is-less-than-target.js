/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var countPairs = function(nums, target) {
     let i = 0;
    let count = 0;
    nums = nums.sort((a,b)=>a-b);
    let j = nums.length - 1;
    let sum;
    while(i < j){
        sum = nums[i] + nums[j]; 
        if(sum >= target){
            j = j - 1;
        }
        else {
            count = count + (j - i);
            i++;
        }
    }
    return count;
};