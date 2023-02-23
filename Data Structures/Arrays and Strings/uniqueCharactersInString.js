/* determine if a string has all unique characters */

// first solution --> O(N^2) time & O(1) space
// function stringHasAllUniqueCharacters(string) {
//     const strLen = string.length
//     for (let i = 0; i < strLen; ++i) {
//         for (let j = i + 1; j < strLen; j++) {
//             if (string[i] === string[j]) {
//                 return false
//             }
//         }
//     }
//     return true
// }

// second solution --> O(N) time & O(N) space
function stringHasAllUniqueCharacters(string) {
    const charHashTable = {};
    for (let i = 0; i < string.length; ++i) {
        if (charHashTable[string[i]]) return false
        charHashTable[string[i]] =  1;
    }
    return true
}

// test case
console.log(stringHasAllUniqueCharacters("")) // true
console.log(stringHasAllUniqueCharacters("a")) // true
console.log(stringHasAllUniqueCharacters("aa")) // false
console.log(stringHasAllUniqueCharacters("helo")) // true
console.log(stringHasAllUniqueCharacters("hello")) // false
