/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
     let left = 0;
    let right = 0;
    let map = new Map();
    let count = p.length
    let arr = new Array();

    for(let char = 0; char < p.length; char++){

        if(map.has(p[char]))
            map.set(p[char], map.get(p[char]) + 1);
        else
            map.set(p[char], 1);
    }

    while(left <= s.length - p.length){

        while(right-left+1 <= p.length){

            if(map.has(s[right])){

                if(map.get(s[right]) > 0)
                    count--;

                map.set(s[right], map.get(s[right])-1);
            }
            right++;
        }

        if(count === 0){
            arr.push(left);
        }

        if(map.has(s[left])){

            if(map.get(s[left]) >= 0)
                count++;
            map.set(s[left], map.get(s[left])+1);
        }

        left++;
    }

    return arr; 
};