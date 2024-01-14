// Example 1:

// Input: nums = [1,2,1]
// Output: [2,-1,2]
// Explanation: The first 1's next greater number is 2;
// The number 2 can't find next greater number.
// The second 1's next greater number needs to search circularly, which is also 2.
// Example 2:

// Input: nums = [1,2,3,4,3]
// Output: [2,3,4,-1,4]

var nextGreaterElements = function (nums) {
  const n = nums.length;
  const result = new Array(n).fill(-1);
  const stack = [];

  // Iterate through the array twice to handle circular cases
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
