/**
 * @param {number[]} dist
 * @param {number[]} speed
 * @return {number}
 */
var eliminateMaximum = function(dist, speed) {
     if (dist.length === 0 || speed.length === 0) {
            return 0;
        }

        const time = dist.map((d, i) => d / speed[i]);

        time.sort((a, b) => a - b);

        let count = 0;
        for (let i = 0; i < time.length; i++) {
            if (time[i] <= i) {
                break;
            }
            count++;
        }

        return count;
};