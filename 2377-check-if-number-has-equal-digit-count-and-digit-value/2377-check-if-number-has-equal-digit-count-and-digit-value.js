/**
 * @param {string} num
 * @return {boolean}
 */
var digitCount = function(num) {
       let array = num.split('')
    for (const num of array){
        if (array.filter(el => el === num).length !== +array[num]) return false
    }
    return true
};