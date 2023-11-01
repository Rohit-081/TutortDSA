var findKthLargest = function (nums, k) {
  nums.sort((a, b) => a - b);
  return console.log(nums[nums.length - k]);
};

findKthLargest([3, 2, 1, 5, 6, 4], 2);
