/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// Time Complexity: O(n)
// Space Complexity: O(n)

var twoSum = function(nums, target) {
    const hashTable = {}
    for (let i = 0; i < nums.length; i++) {
        // step 2
        // if we discover current number in hashTable, then we have found the
        // second number to add up to meet the target
        // then we return it
        if (hashTable[nums[i]] !== undefined) return [hashTable[nums[i]], i]

        // step 1
        // update hashTable with the number that would add with current number
        // to give us the target and assign it to the current number index
        hashTable[target - nums[i]] = i;
    }
};

console.log(twoSum([2,7,11,15], 9)) // [0, 1]
console.log(twoSum([3,2,4], 6)) // [1,2]
console.log(twoSum([3,3], 6)) // [0,1]
