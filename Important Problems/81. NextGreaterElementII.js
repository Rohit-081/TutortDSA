// 503. Next Greater Element II
// Solved
// Medium
// Topics
// Companies
// Given a circular integer array nums (i.e., the next element of nums[nums.length - 1] is nums[0]), return the next greater number for every element in nums.

// The next greater number of a number x is the first greater number to its traversing-order next in the array, which means you could search circularly to find its next greater number. If it doesn't exist, return -1 for this number.

// Example 1:

// Input: nums = [1,2,1]
// Output: [2,-1,2]
// Explanation: The first 1's next greater number is 2;
// The number 2 can't find next greater number.
// The second 1's next greater number needs to search circularly, which is also 2.
// Example 2:

// Input: nums = [1,2,3,4,3]
// Output: [2,3,4,-1,4]

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function (nums) {
  const n = nums.length;
  const result = new Array(n).fill(-1);
  const stack = [];

  for (let i = 0; i < 2 * n; i++) {
    const num = nums[i % n];
    while (stack.length > 0 && num > nums[stack[stack.length - 1]]) {
      result[stack.pop()] = num;
    }
    if (i < n) {
      stack.push(i);
    }
  }

  return result;
};

var nextGreaterElements = function (nums) {
  const n = nums.length;
  const result = new Array(n).fill(-1);
  const stack = [];

  for (let i = 0; i < n * 2; i++) {
    const num = nums[i % n];
    while (stack.length > 0 && num > nums[stack[stack.length - 1]]) {
      result[stack.pop()] = num;
    }
    if (i < n) {
      stack.push(i);
    }
  }

  return result;
};
