/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
     const results = [];
    const buffer = [];
    
    const run = (start, sum) => {
        if (sum === target) {
            results.push([...buffer]);
        } else {        
            for (let i = start; i < candidates.length; i++) {
                const newSum = sum + candidates[i];

                if (newSum <= target) {
                    buffer.push(candidates[i]);

                    run(i, newSum);

                    buffer.pop();
                }
            }
        }
    };
    
    run(0, 0);
    
    return results;
};