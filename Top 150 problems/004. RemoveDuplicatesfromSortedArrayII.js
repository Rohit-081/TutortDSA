var removeDuplicates = function (nums) {
  if (nums.length <= 2) {
    return nums.length;
  }

  let index = 2;

  for (let i = 2; i < nums.length; i++) {
    if (nums[i] !== nums[index - 2]) {
      nums[index] = nums[i];
      index++;
    }
  }

  // Modify the original array in-place
  nums.length = index;

  return index;
};

console.log(removeDuplicates([1, 1, 1, 2, 2, 3]));
