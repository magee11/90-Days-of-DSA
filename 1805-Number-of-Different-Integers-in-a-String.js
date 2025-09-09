/**
 * @param {string} word
 * @return {number}
 */
var numDifferentIntegers = function(word) {
    let current = "";
    let numbers = [];

    for (let ch of word) {
        if (ch >= "0" && ch <= "9") {
            current += ch;
        } else if (current) {
            numbers.push(BigInt(current));
            current = "";
        }
    }

    if (current) numbers.push(BigInt(current));

    let result = new Set(numbers);
    return result.size;
};


console.log(numDifferentIntegers("a123bc34d8ef34")); 
// 3 → {123, 34, 8}

console.log(numDifferentIntegers("leet1234code234")); 
// 2 → {1234, 234}

console.log(numDifferentIntegers("a1b01c001")); 
// 1 → {1}
