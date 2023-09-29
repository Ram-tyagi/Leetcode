/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  let hashmap = new Map ();
    
    for(let i=0;i<s.length;i++){
        hashmap.set(s[i], (hashmap.get(s[i])||0)+1);
    }

    for(let i=0;i<t.length;i++){
        if(hashmap.get(t[i])){

            hashmap.set(t[i],hashmap.get(t[i])-1);
            if(hashmap.get(t[i])==0){
                hashmap.delete(t[i]);
            }

        
        }
        else{
            return false;
        }

        
    }
    
    if(hashmap.size==0){
        return true;
    }
    return false;
};