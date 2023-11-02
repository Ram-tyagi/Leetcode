/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProductDifference = function(nums) {
     let ln = nums.length;
    let a = nums.sort((a,b) => a - b)
    return (a[ln - 1] * a[ln - 2]) - (a[1] * a[0])
};