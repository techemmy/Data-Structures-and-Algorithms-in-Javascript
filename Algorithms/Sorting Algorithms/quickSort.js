function quickSort(arr) {
    qs(arr, low = 0, high = arr.length - 1)
    return arr
}

function qs(arr, low, high) {
    if (low >= high) {
        return;
    }

    const pivotIdx = partition(arr, low, high);

    qs(arr, low, pivotIdx - 1)
    qs(arr, pivotIdx + 1, arr.length - 1)
}

function partition(arr, low, high) {
    const pivot = arr[high];
    let pivotIdx = low;
    for (let i = low; i < high; ++i) {
        if (arr[i] <= pivot) {
            const tmp = arr[i]
            arr[i] = arr[pivotIdx]
            arr[pivotIdx] = tmp
            pivotIdx++
        }
    }

    arr[high] = arr[pivotIdx]
    arr[pivotIdx] = pivot

    return pivotIdx
}

// test case
const arr = [9, 3, 7, 4, 69, 420, 42]
const sortedArr = quickSort(arr)
const solution = [3, 4, 7, 9, 42, 69, 420]
console.log(JSON.stringify(sortedArr) === JSON.stringify(solution))