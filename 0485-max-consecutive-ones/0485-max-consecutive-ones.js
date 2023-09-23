/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let n=nums.length;
    let cnt=0;
    let maxCnt=0;
    for(let i=0;i<n;i++){
        if(nums[i]===1){
            cnt++;
            maxCnt=Math.max(maxCnt,cnt);
        }
        else{
            cnt=0;
        }
    }
    return maxCnt;
};