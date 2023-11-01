// 169. Majority Element
// Easy
// 17.4K
// 517
// Companies
// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

// Example 1:

// Input: nums = [3,2,3]
// Output: 3
// Example 2:

// Input: nums = [2,2,1,1,1,2,2]
// Output: 2

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  let candidate = nums[0];
  let count = 1;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === candidate) {
      count++;
    } else {
      count--;
      if (count === 0) {
        candidate = nums[i];
        count = 1;
      }
    }
  }

  return candidate;
  // let mid = Math.floor(nums.length/2);
  // let store =  nums.sort(function(a, b){return a - b});
  // return store[mid];
  // let Obj = {};
  // for(let i = 0; i < nums.length; i++){
  //     if(Obj[nums[i]] > 0){
  //         Obj[nums[i]]++;
  //     } else {
  //         Obj[nums[i]] = 1;
  //     }
  // }
  // return Obj;
};
