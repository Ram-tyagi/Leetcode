/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
      let map = new Map();
    let str = '';
    let keys, values;
    for(let i=0; i<s.length; i++){
        if(!map.has(s[i])){
            map.set(s[i], 1);
        } else {
            map.set(s[i], map.get(s[i]) + 1);
        }
    }
    let map1 = new Map([...map.entries()].sort((a,b) => b[1]-a[1]))
    for(let [i,j] of map1.entries()){
        str += i.repeat(j)
    }
    return str;
};