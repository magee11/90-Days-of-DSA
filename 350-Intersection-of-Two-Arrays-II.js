/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    let result = [];
    let countNum1 = {};
    let countNum2 = {};

    for(let num of nums1){
        countNum1[num] = (countNum1[num] | 0)+1
    }

    for(let num of nums2){
        countNum2[num] = (countNum2[num] | 0)+1
    }

    for (let num in countNum1) {
        if (countNum2[num]) {
            let minCount = Math.min(countNum1[num], countNum2[num]);
            for (let i = 0; i < minCount; i++) {
                result.push(Number(num));
            }
        }
    }
    
    return result
};