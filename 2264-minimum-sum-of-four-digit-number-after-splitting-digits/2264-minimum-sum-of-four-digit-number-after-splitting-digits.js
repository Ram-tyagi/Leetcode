/**
 * @param {number} num
 * @return {number}
 */
var minimumSum = function(num) {
     let arr = [];
    num = num.toString();
    
    for (let i=0;i<4;i++) {
        arr.push(parseInt(num[i]))
    }
    
    arr.sort();
    
    let new1 = arr[0].toString() + arr[2].toString();  
    let new2 = arr[1].toString() + arr[3].toString();
    
    return parseInt(new1) + parseInt(new2);
};