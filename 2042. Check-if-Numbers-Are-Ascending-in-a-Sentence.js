/**
 * @param {string} s
 * @return {boolean}
 */
var areNumbersAscending = function(s) {
    let prev = -Infinity;
    for (let token of s.split(" ")) {
        if (!isNaN(token)) {
            let num = Number(token);
            if (num <= prev) return false;
            prev = num;
        }
    }
    return true;
};