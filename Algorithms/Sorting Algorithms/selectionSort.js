function findSmallest(haystack) {
    let smallest = haystack[0];
    for (let i = 0; i < haystack.length; i++) {
        if (smallest > haystack[i]) {
            smallest = haystack[i]
        }
    }
    return smallest
}

function selectionSort(haystack) {
    const sortedHaystack = [];
    const haystackLength = haystack.length;
    let smallest;
    for (let i = 0; i < haystackLength; i++) {
        smallest = findSmallest(haystack);
        sortedHaystack.push(smallest);
        haystack.splice(haystack.indexOf(smallest), 1);
    }

    return sortedHaystack;
}

console.log(selectionSort([2,4,5,1,9]))