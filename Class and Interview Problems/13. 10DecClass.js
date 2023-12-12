/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  // let xor = 0;
  // for(let i = 0; i < nums.length; i++){
  //     xor ^= nums[i];
  // }
  // return xor;
  return nums.reduce((acc, val) => val ^ acc, 0);
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  let sumOfNumber = (nums.length * (nums.length + 1)) / 2;
  let sumOfArray = nums.reduce((acc, val) => acc + val, 0);
  return sumOfNumber - sumOfArray;
};

/**
 * @param {number[]} encoded
 * @param {number} first
 * @return {number[]}
 */
var decode = function (encoded, first) {
  let result = [];
  result.push(first);
  for (let i = 0; i < encoded.length; i++) {
    let res = encoded[i] ^ result[i];
    result.push(res);
  }
  return result;
};
