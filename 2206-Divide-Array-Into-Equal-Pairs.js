/**
 * @param {number[]} nums
 * @return {boolean}
 */
var divideArray = function(nums) {
    let count = {};
    
    for (let num of nums) {
        count[num] = (count[num] || 0) + 1;
    }

    for (let key in count) {
        if (count[key] % 2 !== 0) return false;
    }

    return true;
};


console.log(divideArray([3,2,3,2,2,2])); // true
console.log(divideArray([1,2,3,4]));     // false
