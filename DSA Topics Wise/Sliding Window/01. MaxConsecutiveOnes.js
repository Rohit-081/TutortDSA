var findMaxConsecutiveOnes = function (nums) {
  let maxOne = 0;
  let curOne = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      curOne++;
      maxOne = maxOne > curOne ? maxOne : curOne;
    } else {
      curOne = 0;
    }
  }
  return maxOne;
};
