/* Given an integer array nums, you need to find one continuous subarray that if you only sort this subarray in ascending order, then the whole array will be sorted in ascending order.
Return the shortest such subarray and output its length. */

/* Example 1:

Input: nums = [2,6,4,8,10,9,15]
Output: 5
Explanation: You need to sort [6, 4, 8, 10, 9] in ascending order to make the whole array sorted in ascending order.
Example 2:

Input: nums = [1,2,3,4]
Output: 0
Example 3:

Input: nums = [1]
Output: 0
 */
var findUnsortedSubarray = function (nums) {
  // Initialize low with zero.
  let low = 0;
  // Initialize high with the length - 1.
  let high = nums.length - 1;

  while (low + 1 < nums.length && nums[low] <= nums[low + 1]) low++;
  while (high - 1 >= 0 && nums[high - 1] <= nums[high]) high--;

  if (low == nums.length - 1) return 0;
  let wMin = Math.min();
  let wMax = Math.max();

  for (let i = low; i <= high; i++) {
    wMin = Math.min(wMin, nums[i]);
    wMax = Math.max(wMax, nums[i]);
  }

  while (low - 1 >= 0 && nums[low - 1] > wMin) low--;
  while (high + 1 <= nums.length - 1 && nums[high + 1] < wMax) high++;

  return high - low + 1;
};

console.log(findUnsortedSubarray([2, 6, 4, 8, 10, 9, 15]));
console.log(findUnsortedSubarray([2, 5, 6, 4, 8, 10, 9, 15]));
console.log(findUnsortedSubarray([1, 3, 4, 7, 6, 4, 8, 10, 9, 15]));

// Time Complexity O(n);
// Space Complexity constant.
