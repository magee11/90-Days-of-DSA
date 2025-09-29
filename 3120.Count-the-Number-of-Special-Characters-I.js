/**
 * @param {string} word
 * @return {number}
 */
let numberOfSpecialChars = function (word) {
    const res = new Set();

    for (i = 0; i < word.length; i++) {
        if (word.includes(word[i].toLowerCase()) && word.includes(word[i].toUpperCase())) {
            res.add(word[i].toLowerCase());
        }
    }

    return res.size;
}