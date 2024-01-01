/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  let i = 0;
  while (i < nums.length) {
    if (nums[i] == val) {
      nums.splice(i, 1);
    } else {
      i++;
    }
  }
  return nums.length;
  //  let i = 0;
  //     let n = nums.length;

  //     while (i < n) {
  //         if (nums[i] === val) {
  //             nums[i] = nums[n - 1];
  //             n--;
  //         } else {
  //             i++;
  //         }
  //     }

  //     nums.length = n;
  //     return n;
};
