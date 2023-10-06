/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
     const set = new Set();
    const res = new Set();
    for(const num of nums1) set.add(num);
    for(const num of nums2) set.has(num) && res.add(num);
    return [...res];
};