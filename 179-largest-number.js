/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {
    let arr = nums.map(String);
    let result = arr.sort((a,b)=>(b+a).localeCompare(a+b)).join("");

    return result[0] === "0" ? "0" : result;
};