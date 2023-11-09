/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    let x=0
    while(2**x<n){
        x++
    }
    return 2**x===n
   
};