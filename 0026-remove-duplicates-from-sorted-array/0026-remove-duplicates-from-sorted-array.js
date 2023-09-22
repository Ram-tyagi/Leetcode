/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let single=new Map();
for(let i=0;i<nums.length;i++)
{
if(!single.has(nums[i])){
single.set(nums[i],1)
}
}
let i=0
for(key of single.keys())
{
nums[i]=key;
i++
}
let k=single.size;
return (k) ;
};