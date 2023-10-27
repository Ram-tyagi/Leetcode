/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
      let ans=[]
    let i=0
    while(i<nums.length){
        let count=0
        for(let num of nums){
            if(nums[i]>num){
                count+=1
            }
        }
        ans.push(count)
        i++;
    }
    return ans
};