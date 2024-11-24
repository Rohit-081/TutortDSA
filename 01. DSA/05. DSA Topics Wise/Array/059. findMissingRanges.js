function findMissingRanges(nums, lower, upper) {
  const result = [];

  // Helper function to add ranges to the result list
  function addRange(start, end) {
    if (start === end) {
      result.push(`${start}`);
    } else {
      result.push(`${start}->${end}`);
    }
  }

  // Iterate through the sorted array
  let prev = lower - 1;
  for (const num of [...nums, upper + 1]) {
    if (prev + 1 <= num - 1) {
      addRange(prev + 1, num - 1);
    }
    prev = num;
  }

  return result;
}

// Example usage:
const nums1 = [0, 1, 3, 50, 75];
const lower1 = 0;
const upper1 = 99;
console.log(findMissingRanges(nums1, lower1, upper1));

const nums2 = [0, 1, 2, 3, 7];
const lower2 = 0;
const upper2 = 7;
console.log(findMissingRanges(nums2, lower2, upper2));
