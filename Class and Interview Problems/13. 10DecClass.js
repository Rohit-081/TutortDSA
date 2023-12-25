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

var productExceptSelf = function (nums) {
  const n = nums.length;
  const result = new Array(n).fill(1);

  // Compute product of prefixes
  let prefixProduct = 1;
  for (let i = 0; i < n; i++) {
    result[i] *= prefixProduct;
    prefixProduct *= nums[i];
  }

  // Compute product of suffixes and multiply with the prefix product
  let suffixProduct = 1;
  for (let i = n - 1; i >= 0; i--) {
    result[i] *= suffixProduct;
    suffixProduct *= nums[i];
  }

  return result;
};

console.log(productExceptSelf([1, 2, 3, 4])); // Output: [24, 12, 8, 6]
console.log(productExceptSelf([-1, 1, 0, -3, 3])); // Output: [0, 0, 9, 0, 0]
