/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

var nextGreaterElement = function (nums1, nums2) {
  let result = [];
  for (let i = 0; i < nums1.length; i++) {
    for (let j = 0; j < nums2.length; j++) {
      if (nums1[i] === nums2[j]) {
        let found = false;
        for (let k = j + 1; k < nums2.length; k++) {
          if (nums2[k] > nums1[i]) {
            result.push(nums2[k]);
            found = true;
            break;
          }
        }
        if (!found) {
          result.push(-1); // If no greater element is found, push -1
        }
      }
    }
  }
  return result;
};
var nextGreaterElement = function (nums1, nums2) {
  const stack = [];
  const nextGreater = new Map();

  // Iterate through nums2 to find the next greater element for each element
  for (const num of nums2) {
    while (stack.length > 0 && num > stack[stack.length - 1]) {
      nextGreater[stack.pop()] = num;
    }
    stack.push(num);
  }

  // Remaining elements in the stack have no next greater element
  while (stack.length > 0) {
    nextGreater[stack.pop()] = -1;
  }

  // Build the result array using the mapping from nums2
  const result = nums1.map((num) => nextGreater[num]);

  return result;
};

function nextGreaterElement(nums1, nums2) {
  const nextGreater = {};
  const stack = [];

  for (const num of nums2) {
    while (stack.length > 0 && num > stack[stack.length - 1]) {
      nextGreater[stack.pop()] = num;
    }
    stack.push(num);
  }

  const result = nums1.map((num) => nextGreater[num] || -1);
  return result;
}

// Example usage:
const nums1_1 = [4, 1, 2];
const nums2_1 = [1, 3, 4, 2];
console.log(nextGreaterElement(nums1_1, nums2_1)); // Output: [-1, 3, -1]

const nums1_2 = [2, 4];
const nums2_2 = [1, 2, 3, 4];
console.log(nextGreaterElement(nums1_2, nums2_2)); // Output: [3, -1]
