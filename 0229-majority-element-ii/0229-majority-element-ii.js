/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
     if(nums.length===1)return [nums[0]];
    let map = new Map();
    for(let i=0;i<nums.length;i++){
        if(map.has(nums[i])){
            let value=map.get(nums[i])+1;
            map.set(nums[i],value);
        }
        else{
            map.set(nums[i],1)
        }
    }
    let result=[];
    for (let [key, value] of map) {
        console.log(key + " = " + value);
        if(value>nums.length/3){
             result.push(key)
        }   
    }
    return result;
};