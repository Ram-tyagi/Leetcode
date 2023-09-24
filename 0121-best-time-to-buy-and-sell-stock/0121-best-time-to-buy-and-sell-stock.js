/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let profit = 0;
    let minVal = Infinity;
    for(let i=0;i<prices.length; i++){
        minVal = Math.min(minVal,prices[i])
        profit = Math.max(profit,prices[i]- minVal)
        
    }
    return profit;
};