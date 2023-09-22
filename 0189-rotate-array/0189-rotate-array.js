/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    const res = [];

    for (let i = 0; i < nums.length; i++) {
        const j = ((nums.length) - (k % nums.length) + i)% nums.length;
        res[i] = nums[j];
    }

    for (let i = 0; i < nums.length; i++) {
        nums[i] = res[i];
    }
};