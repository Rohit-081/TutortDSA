/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  //    let i = 1;
  //    while(i < nums.length){
  //        if(nums[i-1] == nums[i]){
  //            nums.splice(i,1);
  //        } else {
  //            i++
  //        }
  //    }
  //    return nums.length
  if (nums.length === 0) {
    return 0;
  }

  let uniqueCount = 1;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1]) {
      nums[uniqueCount] = nums[i];
      uniqueCount++;
    }
  }

  nums.length = uniqueCount;
  return uniqueCount;
};
