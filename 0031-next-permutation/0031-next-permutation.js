/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    let swap = (l,r) =>{
        [nums[l],nums[r]] = [nums[r],nums[l]]
    }
    let reverse = (left) =>{
        let right = nums.length-1;
        while(left<right){
            swap(left,right)
            left++
            right--
        }
    }

    for(let i = nums.length-2; i>=0; i--){
        for(let j = nums.length-1; j>i; j--){
            if(nums[j] >nums[i]){
                swap(i,j);
                reverse(i+1)
                return;
            }
        }
    }
    reverse(0)
};