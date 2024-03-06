var summaryRanges = function (nums) {
  let result = [];
  let start = nums[0];
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] + 1 === nums[i + 1]) {
      count++;
    } else {
      if (count == 0) {
        result.push(nums[i].toString());
        start = nums[i + 1];
      } else {
        result.push(start + "->" + nums[i]);
        start = nums[i + 1];
        count = 0;
      }
    }
  }
  return result;
};
console.log(summaryRanges([0, 1, 2, 4, 5, 7]));
console.log(summaryRanges([0, 2, 3, 4, 6, 8, 9]));
