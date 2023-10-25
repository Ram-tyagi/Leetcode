/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    let left=0;
    rigth=s.length-1
    while(left<rigth){
        let temp=s[left]
        s[left]=s[rigth]
        s[rigth]=temp
        left+=1
        rigth-=1
    }
    return s;
};