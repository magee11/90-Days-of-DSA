/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    
    let n = nums.length;

    let total = (n *(n+1))/2;

    let actualSum = nums.reduce((acc,num)=>acc+num,0);

    return total-actualSum
};