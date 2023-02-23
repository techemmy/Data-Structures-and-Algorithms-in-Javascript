function linear_search(haystack, needle) {
    for (let i = 0; i < haystack.length; ++i) {
        if (haystack[i] === needle) {
            return true
        }
    }
    return false
}

console.log(linear_search([1,5,6,2,3,6], 10)) // test case