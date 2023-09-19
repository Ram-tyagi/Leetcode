/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    let arr=[];
    for(let i=1;i<=n;i++){
        let string='';
        if(i%3==0 && i%5==0){
            string+="FizzBuzz"
        } 
          else if(i%3==0){
            string+="Fizz"
          }
          else if(i%5==0){
              string+="Buzz"
          }
          else{
              string+=i;
          }
          arr.push(string)

    }
    return arr;
};