/**
 * @param {number[]} nums
 * @return {number}
 */
var maxFrequencyElements = function(nums) {
    let freq = {};
    let maxFreq = 0;
    let result = 0;

    for (let num of nums) {
        freq[num] = (freq[num] || 0) + 1;

        if (freq[num] > maxFreq) {
            maxFreq = freq[num];
            result = freq[num];
        } else if (freq[num] === maxFreq) {
            result += freq[num];
        }
    }

    return result;
};