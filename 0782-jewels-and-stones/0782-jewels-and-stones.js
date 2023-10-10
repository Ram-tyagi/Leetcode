/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
     let res = 0;

  for (let index = 0; index < jewels.length; index++) {
    let re = new RegExp(jewels[index], "g");
    if (stones.match(re) != null) res += stones.match(re).length;
  }

  return res;
};