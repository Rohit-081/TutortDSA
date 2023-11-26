// Given a positive integer n, find the smallest integer which has exactly the same digits existing in the integer n and is greater in value than n. If no such positive integer exists, return -1.

// Note that the returned integer should fit in 32-bit integer, if there is a valid answer but it does not fit in 32-bit integer, return -1.

// Example 1:

// Input: n = 12
// Output: 21
// Example 2:

// Input: n = 21
// Output: -1

/**
 * @param {number} n
 * @return {number}
 */
var nextGreaterElement = function (n) {
  // Step 1: Convert the integer to an array of digits
  const nums = String(n).split("").map(Number);

  // Step 2: Find the first decreasing pair from the right
  let i = nums.length - 1;
  while (i > 0 && nums[i - 1] >= nums[i]) {
    i--;
  }

  // If no decreasing pair found, return -1
  if (i === 0) {
    return -1;
  }

  // Step 3: Swap nums[i-1] with the smallest digit to its right that is greater
  let j = nums.length - 1;
  while (nums[j] <= nums[i - 1]) {
    j--;
  }
  [nums[i - 1], nums[j]] = [nums[j], nums[i - 1]];

  // Step 4: Sort the subarray to the right of nums[i-1] in ascending order
  nums.splice(i, nums.length - i, ...nums.slice(i).sort((a, b) => a - b));

  // Step 5: Convert the modified array back to an integer
  const result = parseInt(nums.join(""), 10);

  // Check if it fits in a 32-bit integer
  return result > 2 ** 31 - 1 ? -1 : result;
};
