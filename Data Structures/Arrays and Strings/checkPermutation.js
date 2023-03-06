// Check Permutation: Given two strings,write a method to decide
// if one is a permutation of the other.

// We will assume for this problem that the comparison
// is case sensitive and whitespace is significant
// Also we assume it's ASCII character set

// Time Complexity: O(N)
// Space Complexity: O(N);
function checkPermutation(str1, str2) {
    if (str1.length !== str2.length) return false

    const chars = {}
    for (let i of str1) {
        if (chars[i]) {
            chars[i]++
        } else {
            chars[i] = 1;
        }
    }

    for (let i of str2) {
        if (chars[i] && chars[i] > 0) {
            chars[i]--;
        } else {
            return false;
        }
    }

    return true;
}

// test cases
console.log(checkPermutation("", "")); // true
console.log(checkPermutation("a", "b")); // false
console.log(checkPermutation("ba", "ab")); // true
console.log(checkPermutation("aab", "bba")); // false