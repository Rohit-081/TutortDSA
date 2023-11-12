// var containsNearbyDuplicate = function(nums, k) {
//       for(let i = 0; i < nums.length; i+=k){
//         let left = i;
//         let right = Math.min(i+k, nums.length - 1)
//         let obj = {};
//         for(let j = left; j <= right; j++){
//              if(obj[nums[j]]){
//                  obj[nums[j]] += 1;
//                  return true;
//              } else{
//                  obj[nums[j]] = 1;
//              }
//        }
//    }
//   return false;
// };

var containsNearbyDuplicate = function (nums, k) {
  const numIndices = {};

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (num in numIndices && Math.abs(i - numIndices[num]) <= k) {
      return true;
    }
    numIndices[num] = i;
  }

  return false;
};
console.log(containsNearbyDuplicate([1, 2, 3, 1], 3));
console.log(containsNearbyDuplicate([1, 0, 1, 1], 1));
console.log(containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2));
console.log(containsNearbyDuplicate([1, 2, 1], 0));
