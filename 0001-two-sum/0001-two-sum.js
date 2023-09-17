/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let i = 0;
    let y = 0;
    let firstNumber = 0;
    let secondNumber = 0;
    while(i < nums.length - 1){
        firstNumber = nums[i];
        y = i + 1;
        while(y < nums.length){
            secondNumber = nums[y]
            if( firstNumber + secondNumber === target) return [i, y]
            y++;
        }
        i++;
}

}