function bubble_sort(arr) {
    for (let i = 0; i < arr.length; ++i) {
        for (j = 0; j < arr.length - 1 - i; ++j) {
            if (arr[j] > arr[j + 1]) {
                const curr = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = curr;
            }
        }
    }
    return arr;
}

console.log(bubble_sort([9, 3, 7, 4, 69, 420, 42])) // === [3, 4, 7, 9, 42, 69, 420]
console.log(bubble_sort([7, 6, 5, 4, 3]))