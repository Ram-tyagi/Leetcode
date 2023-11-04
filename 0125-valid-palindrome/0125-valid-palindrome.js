/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
     let newStr = s.replace(/[^0-9a-z]/gi, '').toLowerCase();
       if(newStr.length <= 1) return true;
      if(newStr.length === 2) return newStr[0] === newStr[1]

       function helper(rcvStr){
          if(rcvStr.length === 0) return rcvStr;
          return helper(rcvStr.slice(1)) + rcvStr[0];
      }
      let returnStr = helper(newStr);
      return returnStr === newStr ? true : false;
};