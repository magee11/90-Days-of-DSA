/**
 * @param {string[]} wordlist
 * @param {string[]} queries
 * @return {string[]}
 */
var spellchecker = function(wordlist, queries) {
    let result = [];
    let exactSet = new Set(wordlist);

    const devowel = (word) => word.toLowerCase().replace(/[aeiou]/g, "*");
    let caseInsensitive = new Map();
    let vowelInsensitive = new Map();

    for (let word of wordlist) {
        let lower = word.toLowerCase();
        if (!caseInsensitive.has(lower)) {
            caseInsensitive.set(lower, word);
        }

        let vow = devowel(word);
        if (!vowelInsensitive.has(vow)) {
            vowelInsensitive.set(vow, word);
        }
    }

    for (let query of queries) {
        if (exactSet.has(query)) {
            result.push(query);
        } else {
            let lower = query.toLowerCase();
            if (caseInsensitive.has(lower)) {
                result.push(caseInsensitive.get(lower));
            } else {
                let vow = devowel(query);
                if (vowelInsensitive.has(vow)) {
                    result.push(vowelInsensitive.get(vow));
                } else {
                    result.push("");
                }
            }
        }
    }

    return result;
};