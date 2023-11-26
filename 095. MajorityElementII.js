var majorityElement = function (nums) {
  let Obj = {};
  let result = [];
  let n = Math.floor(nums.length / 3);
  for (let i = 0; i < nums.length; i++) {
    if (Obj[nums[i]] > 0) {
      Obj[nums[i]]++;
    } else {
      Obj[nums[i]] = 1;
    }
  }
  for (let key in Obj) {
    if (Obj[key] > n) {
      result.push(parseInt(key));
    }
  }

  return result;
};
