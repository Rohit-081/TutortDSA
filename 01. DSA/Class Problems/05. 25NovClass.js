function subarrayWithSumZero(arr, n) {
  for (let i = 0; i < n; i++) {
    let sum = 0;
    for (let j = i; j < n; j++) {
      sum += arr[j];
      if (sum == 0) {
        return true;
      }
    }
  }
  return false;
}

console.log(subarrayWithSumZero([4, -2, 3, 1, 6], 5));

console.log(subarrayWithSumZero([4, 2, -3, 1, 6], 5));

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  //  let candidate = nums[0];
  //  let count = 1;

  // for (let i = 1; i < nums.length; i++) {
  //     if (nums[i] === candidate) {
  //         count++;
  //     } else {
  //         count--;
  //         if (count === 0) {
  //             candidate = nums[i];
  //             count = 1;
  //         }
  //     }
  // }

  // return candidate;
  // let mid = Math.floor(nums.length/2);
  // let store =  nums.sort(function(a, b){return a - b});
  // return store[mid];

  let Obj = {};
  for (let i = 0; i < nums.length; i++) {
    if (Obj[nums[i]] > 0) {
      Obj[nums[i]]++;
    } else {
      Obj[nums[i]] = 1;
    }
  }
  for (const key in Obj) {
    if (Obj[key] > nums.length / 2) {
      return key;
    }
  }
};

console.log(majorityElement([3, 2, 3]));
