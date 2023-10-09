/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, tar) {
   let l = 0,
    r = nums.length - 1,
    lIdx = -1,
    rIdx = -1;
  while (l <= r) {
    const mid = Math.floor(l / 2 + r / 2);
    if (nums[mid] < tar) {
      l = mid + 1;
    } else if (nums[mid] >= tar) {
      r = mid - 1;
    }
  }
  if (nums[l] === tar) lIdx = l;
  (l = 0), (r = nums.length - 1);
  while (l <= r) {
    const mid = Math.floor(l / 2 + r / 2);
    if (nums[mid] <= tar) {
      l = mid + 1;
    } else if (nums[mid] > tar) {
      r = mid - 1;
    }
  }
  if (nums[r] === tar) rIdx = r;
  return [lIdx, rIdx];
};