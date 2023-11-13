/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
    rest = [0];
    for (i=0 ; i<gain.length ; i++){
        rest.push(rest[i]+gain[i])

    }
    return Math.max(...rest)
};