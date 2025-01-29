var equilibriumIndex = function (nums) {
  let lsum, rsum;
  if (nums.length == 1) {
    return 1;
  }
  for (let i = 0; i < nums.length - 1; i++) {
    lsum = 0;
    for (let j = 0; j < i; j++) {
      lsum += nums[j];
    }
    rsum = 0;
    for (let k = i + 1; k < nums.length; k++) {
      rsum += nums[k];
    }
    if (lsum == rsum) {
      return i;
    }
  }
  return -1;
};

console.log(equilibriumIndex([4, 6, 0, 7, 3]));

var equilibriumIndex = function (nums) {
  let totalSum = 0;
  let leftSum = 0;
  for (let i = 0; i < nums.length; i++) {
    totalSum += nums[i];
  }
  for (let j = 0; j < nums.length; j++) {
    totalSum = totalSum - nums[j];

    if (totalSum === leftSum) {
      return j;
    }
    leftSum += nums[j];
  }
  return -1;
};

console.log(equilibriumIndex([1, 3, 5, 2, 2]));
