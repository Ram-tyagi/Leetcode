/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
     let sum = 0;
    for (let i = 0; i <= nums.length;){
        if (nums[i] == val & i != 0){
            nums.splice(i, 1);
        }else if (nums[i] == val & i == 0){
            nums.splice(i, 1);
        }else{
            i++;
            sum = sum + 1;
        }
    }
    return sum;
};