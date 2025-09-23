/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let reversed = 0;
     let num = Math.abs(x);
 
     while (num > 0) {
         let digit = num % 10;
         reversed = reversed * 10 + digit;
         num = Math.floor(num / 10);
     }
 
     if (reversed > 2147483647) return 0;
 
     return x < 0 ? -reversed : reversed;
 };