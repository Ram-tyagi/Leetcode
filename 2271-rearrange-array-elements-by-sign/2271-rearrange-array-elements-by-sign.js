/**
 * @param {number[]} nums
 * @return {number[]}
 */
var rearrangeArray = function(nums) {
    let even=0;
    let odd=1;
    let arr=[]
    let i=0;
    while(i<nums.length){
        if(nums[i]>0){
           arr[even]=nums[i]
           even+=2;
        }
        else{
           arr[odd]=nums[i]
           odd+=2;
        }
        i++;
    }
    return arr;
};