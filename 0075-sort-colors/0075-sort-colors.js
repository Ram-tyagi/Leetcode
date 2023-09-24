/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let n=nums.length;
    for(let i=0;i<n;i++){
        for(let j=1;j<n;j++){
            if(nums[j]<nums[j-1]){
                let temp=nums[j-1]
                nums[j-1]=nums[j]
                nums[j]=temp
            }
        }
    }
    return nums;
};