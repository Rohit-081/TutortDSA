var decompressRLElist = function (nums) {
  let result = [];
  for (let i = 0; i < nums.length; i++) {
    if (i % 2 != 0) {
      for (let j = 0; j < nums[i - 1]; j++) {
        result.push(nums[i]);
      }
    }
  }
  return result;
};
