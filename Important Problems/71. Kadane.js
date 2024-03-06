var maxSubArray = function (nums) {
  let curSum = nums[0];
  let maxSum = curSum;
  for (let i = 1; i < nums.length; i++) {
    curSum = curSum + nums[i] > nums[i] ? curSum + nums[i] : nums[i];
    maxSum = maxSum > sum ? maxSum : sum;
  }
  return maxSum;
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
console.log(maxSubArray([-2, -1, -3, -4, -1, 12, -1, -5, 4]));

var kadane = function (nums) {
  if (nums.length === 0) {
    return 0;
  }

  let curSum = nums[0];
  let maxSum = nums[0];

  for (let i = 1; i < nums.length; i++) {
    curSum = curSum + nums[i] > nums[i] ? curSum + nums[i] : nums[i];
    if (curSum > maxSum) {
      maxSum = curSum;
    }
    if (curSum < 0) {
      curSum = 0;
    }
  }
  return maxSum;
};

console.log(kadane([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
console.log(kadane([-2, -1, -3, -4, -1, 12, -1, -5, 4]));
