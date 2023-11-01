var maxSubArray = function (nums) {
  let sum = nums[0];
  let max = sum;
  for (let i = 1; i < nums.length; i++) {
    sum = sum + nums[i] > nums[i] ? sum + nums[i] : nums[i];
    max = max > sum ? max : sum;
  }
  console.log(max);
};

maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]);
maxSubArray([-2, -1, -3, -4, -1, 12, -1, -5, 4]);

var kadane = function (nums) {
  let maxSum = 0;
  let curSum = 0;
  for (let i = 1; i < nums.length; i++) {
    curSum = curSum + nums[i];
    if (curSum > maxSum) {
      maxSum = curSum;
    }
    if (curSum < 0) {
      curSum = 0;
    }
  }
  return console.log(maxSum);
};

kadane([-2, 1, -3, 4, -1, 2, 1, -5, 4]);
kadane([-2, -1, -3, -4, -1, 12, -1, -5, 4]);
