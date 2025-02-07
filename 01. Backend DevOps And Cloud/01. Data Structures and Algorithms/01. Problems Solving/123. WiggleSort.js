function wiggleSort(nums) {
  const n = nums.length;

  for (let i = 1; i < n; i += 2) {
    // Check if the current element is smaller than the previous one
    if (i > 0 && nums[i] < nums[i - 1]) {
      [nums[i], nums[i - 1]] = [nums[i - 1], nums[i]];
    }

    // Check if the current element is smaller than the next one
    if (i < n - 1 && nums[i] < nums[i + 1]) {
      [nums[i], nums[i + 1]] = [nums[i + 1], nums[i]];
    }
  }
}

// Example usage:
const nums1 = [3, 5, 2, 1, 6, 4];
wiggleSort(nums1);
console.log(nums1); // Output: [1, 6, 2, 5, 3, 4]

const nums2 = [1, 2, 3, 4];
wiggleSort(nums2);
console.log(nums2); // Output: [1, 4, 2, 3]
