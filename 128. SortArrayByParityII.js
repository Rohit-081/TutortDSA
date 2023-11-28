// 922. Sort Array By Parity II
// Easy
// 2.5K
// 89
// Companies
// Given an array of integers nums, half of the integers in nums are odd, and the other half are even.

// Sort the array so that whenever nums[i] is odd, i is odd, and whenever nums[i] is even, i is even.

// Return any answer array that satisfies this condition.

// Example 1:

// Input: nums = [4,2,5,7]
// Output: [4,5,2,7]
// Explanation: [4,7,2,5], [2,5,4,7], [2,7,4,5] would also have been accepted.
// Example 2:

// Input: nums = [2,3]
// Output: [2,3]

var sortArrayByParityII = function (nums) {
  let evenIndex = 0;
  let oddIndex = 1;

  while (evenIndex < nums.length && oddIndex < nums.length) {
    while (evenIndex < nums.length && nums[evenIndex] % 2 === 0) {
      evenIndex += 2;
    }

    while (oddIndex < nums.length && nums[oddIndex] % 2 === 1) {
      oddIndex += 2;
    }

    if (evenIndex < nums.length && oddIndex < nums.length) {
      // Swap elements at evenIndex and oddIndex
      [nums[evenIndex], nums[oddIndex]] = [nums[oddIndex], nums[evenIndex]];
    }
  }

  return nums;
};
