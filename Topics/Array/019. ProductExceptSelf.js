/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  let result = [];
  for (let i = 0; i < nums.length; i++) {
    let store = 1;
    for (let j = 0; j < nums.length; j++) {
      if (i !== j) {
        store *= nums[j];
      }
    }
    result.push(store);
  }
  return result;
};

var productExceptSelf = function (nums) {
  const n = nums.length;
  const leftProducts = new Array(n).fill(1);
  const rightProducts = new Array(n).fill(1);

  let leftProduct = 1;
  for (let i = 1; i < n; i++) {
    leftProduct *= nums[i - 1];
    leftProducts[i] = leftProduct;
  }

  let rightProduct = 1;
  for (let i = n - 2; i >= 0; i--) {
    rightProduct *= nums[i + 1];
    rightProducts[i] = rightProduct;
  }

  let result = [];
  for (let i = 0; i < n; i++) {
    result.push(leftProducts[i] * rightProducts[i]);
  }
  return result;
};

var productExceptSelf = function (nums) {
  let output = new Array(nums.length).fill(nums[0]);
  let cacheVar = nums[nums.length - 1];

  for (let i = 1; i < nums.length; i++) {
    output[i] = output[i - 1] * nums[i];
  }

  output[nums.length - 1] = output[output.length - 2];
  for (let j = nums.length - 2; j > 0; j--) {
    output[j] = output[j - 1] * cacheVar;
    cacheVar = cacheVar * nums[j];
  }
  output[0] = cacheVar;
  return console.log(output);
};

productExceptSelf([1, 2, 3, 4]);
