/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
   var copy=x
    var rev=0
    while(copy>0){
        rev=rev*10+copy%10
        copy=Math.trunc(copy/10)
    }
   return rev==x
};