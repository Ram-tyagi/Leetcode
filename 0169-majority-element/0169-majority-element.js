/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    const n = nums.length;
    const map = new Map();
    for(let i = 0; i < n; ++i) {
        const num = nums[i];
        const count = map.has(num) ? map.get(num) : 0;
        map.set(num, count + 1);
        if(count + 1 > Math.floor(n / 2)) {
            return num;
        }
    }
    return -1;
};