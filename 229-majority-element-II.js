/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
    let n = Math.floor(nums.length/3);
    let result = [];
    let count = {};

    for(let num of nums){
        count[num] = (count[num] | 0)+1
    }

    for(let num in count){
        if(count[num]>n){
            result.push(Number(num))
        }
    }
    return result
};