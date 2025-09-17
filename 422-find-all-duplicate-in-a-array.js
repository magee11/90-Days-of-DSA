/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
    let count = {};
    let result = []

    for(let num of nums){
        count[num] = (count[num] | 0) +1
    }

    for(let map in count){
       if( count[map] === 2){
        result.push(Number(map))
       }
    }
    return result;
};