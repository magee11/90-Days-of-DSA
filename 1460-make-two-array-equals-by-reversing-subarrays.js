/**
 * @param {number[]} target
 * @param {number[]} arr
 * @return {boolean}
 */
var canBeEqual = function(target, arr) {
    if(target.length !== target.length) return false;
    let count = {};
    for(let val of target){
        count[val] = (count[val] | 0) +1
    }
    for(let val of arr){
        if(!count[val]) return false;
        count[val]--
    }
    return Object.values(count).every((val)=>val===0);
};