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
  // for(const key in Obj){
  //     if(Obj[key] > nums.length / 2){
  //         return key
  //     }
  // }
};
