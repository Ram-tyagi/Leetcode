/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = (sentences,maxLength=0)=> {
       for (let sentence of sentences) {
        maxLength = sentence.split(" ").length > maxLength ? sentence.split(" ").length : maxLength;
    }
    return maxLength;
};