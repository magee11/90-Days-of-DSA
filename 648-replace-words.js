/**
 * @param {string[]} dictionary
 * @param {string} sentence
 * @return {string}
 */
var replaceWords = function(dictionary, sentence) {

    sentence = sentence.split(" ");
    let result = [];

    for(let word of sentence){
        let replacement = word;
        for(let dic of dictionary){
            if(word.startsWith(dic)){
                if (dic.length < replacement.length) {
                    replacement = dic;
                }
            }
        }
        result.push(replacement)

    }
    return result.join(" ")
};