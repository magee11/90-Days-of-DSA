/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function(arr1, arr2) {
    const rank = new Map();
    arr2.forEach((val, idx) => rank.set(val, idx));
  
    arr1.sort((a, b) => {
      const rankA = rank.has(a) ? rank.get(a) : Infinity;
      const rankB = rank.has(b) ? rank.get(b) : Infinity;
  
      if (rankA === rankB) {
        return a - b;
      }
      return rankA - rankB; 
    });
  
    return arr1;
  };