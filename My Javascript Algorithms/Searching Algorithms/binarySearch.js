function binary_search(haystack, needle) {
    let low = 0;
    let high = haystack.length;

    while (low < high) {
        const midpoint = Math.floor(low + (high - low)/2);
        const value = haystack[midpoint];

        if (value === needle) {
            return true
        } else if (value > needle) {
            high = midpoint;
        } else {
            low = midpoint + 1;
        }

    }
    return false
}

console.log(binary_search([1,2,3,4,5,6,7,8], 4))