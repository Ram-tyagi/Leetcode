/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    let finalOutput = [];
    const helper = (currentIndex, set) => {
        if (currentIndex >= nums.length) {
            finalOutput.push(set);
            return
        }
        helper(currentIndex + 1, [...set, nums[currentIndex]]);
        helper(currentIndex + 1, set);

    }
    	helper(0, []);
        return finalOutput;
};