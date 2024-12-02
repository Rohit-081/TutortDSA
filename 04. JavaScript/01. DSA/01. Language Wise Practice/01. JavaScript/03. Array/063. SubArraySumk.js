// Code Implementation

// Brute-force Method
function countSubarraysBruteforce(nums, k) {
  let count = 0;

  for (let start = 0; start < nums.length; start++) {
    let sum = 0;

    for (let end = start; end < nums.length; end++) {
      sum += nums[end];

      if (sum === k) {
        count++;
      }
    }
  }

  return count;
}

// Optimized Approach Using Hashmap
function countSubarraysOptimized(nums, k) {
  let count = 0;
  let sum = 0;
  const sumMap = new Map();
  sumMap.set(0, 1);

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];

    if (sumMap.has(sum - k)) {
      count += sumMap.get(sum - k);
    }

    sumMap.set(sum, (sumMap.get(sum) || 0) + 1);
  }

  return count;
}

// Example Usage
const nums1 = [1, 1, 1];
const k1 = 2;
console.log("Example 1:", countSubarraysOptimized(nums1, k1));

const nums2 = [1, 2, 3];
const k2 = 3;
console.log("Example 2:", countSubarraysOptimized(nums2, k2));
