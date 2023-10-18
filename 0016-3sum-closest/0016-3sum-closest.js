/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
        nums.sort((a, b) => a - b);
    let n = nums.length;
    let closest_sum = nums[0] + nums[1] + nums[2];
    for (let i = 0; i < n - 2; i++) {
        let left = i + 1, right = n - 1;
        while (left < right) { 
            let sum = nums[i] + nums[left] + nums[right];
            if (sum == target) { 
                return sum;
            } else if (sum < target) {
                left++;
            } else {
                right--;
            }
            if (Math.abs(sum - target) < Math.abs(closest_sum - target)) { 
                closest_sum = sum;
            }
        }
    }
    return closest_sum;

};