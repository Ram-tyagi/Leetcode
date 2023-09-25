/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
    let res=0,sum=0

  let map=new Map()
  map.set(0,1)
  for(let i=0;i<nums.length;i++){    
    sum += nums[i]
      map.get(sum-k)?res+= map.get(sum-k):res
       map.set(sum,map.get(sum)+1||1)
  }
  return res
};