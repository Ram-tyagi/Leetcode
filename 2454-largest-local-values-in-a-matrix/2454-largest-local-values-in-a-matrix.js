/**
 * @param {number[][]} grid
 * @return {number[][]}
 */
var largestLocal = function(grid) {
    const len = grid.length;
    const res = [];

    for (let i = 1; i < len - 1; i++) {
        const row = [];
        for (let j = 1; j < len - 1; j++) {
           
            let max = 0;
            for (let k = i - 1; k <= i + 1; k++) {
                for (let l = j - 1; l <= j + 1; l++) {
                    max = Math.max(max, grid[k][l]);
                }
            }
            row.push(max);
        }
        res.push(row);
    }

    return res;
};