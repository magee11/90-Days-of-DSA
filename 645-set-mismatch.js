/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
    let n = nums.length;
    let count = new Array(n+1).fill(0);
    let duplicate = -1, missing = -1;

    for (let num of nums) {
        count[num]++;
    }

    for (let i = 1; i <= n; i++) {
        if (count[i] === 2) duplicate = i;
        if (count[i] === 0) missing = i;
    }

    return [duplicate, missing];
};
