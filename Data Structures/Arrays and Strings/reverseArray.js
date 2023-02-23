/* Given an array (or string), the task is to reverse the array/string */

// first attempt
function reverseArray(arr) {
    let [startPos, endPos] = [0, arr.length-1];
    while (startPos < endPos) {
        const temp = arr[startPos];
        arr[startPos] = arr[endPos];
        arr[endPos] = temp;
        startPos++;
        endPos--;
    }
    return arr;
}

// test case
let arr = [1,2,3,4,5,6];
reverseArray(arr)
console.log(arr) // dlrow olleh