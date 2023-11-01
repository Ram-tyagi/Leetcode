/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
     let r = digits.length - 1;

  while (true) {
    if (r < 0) {
      digits.unshift(1);
      return digits;
    };

    if (digits[r] + 1 === 10) {
      digits[r] = 0;
    } else {
      digits[r] += 1;
      return digits;
    }

    r--;
  }
};