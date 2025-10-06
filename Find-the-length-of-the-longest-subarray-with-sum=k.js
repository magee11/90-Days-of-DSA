var longestSubarraySum = function(nums, k) {
    let maxLen = 0;
    for(let i=0; i<nums.length; i++){
        let sum = 0;
        for(let j=i; j<nums.length; j++){
            sum += nums[j];
            if(sum === k){
                maxLen = Math.max(maxLen, j - i + 1);
            }
        }
    }
    return maxLen;
};

console.log(longestSubarraySum([1, 2, 3, 1, 1, 1, 2], 3)); 
// Output → 3 (subarray [1,1,1])
