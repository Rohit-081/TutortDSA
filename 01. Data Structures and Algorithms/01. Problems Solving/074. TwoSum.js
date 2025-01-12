var twoSum1 = function (nums, target) {
  const arr = []; //created empty array

  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      const sum = nums[i] + nums[j];
      if (target === sum) {
        arr.push(i);
        arr.push(j);
        break;
      }
    }
  }

  return console.log(arr);
};

twoSum1([2, 7, 11, 15], 9);

//Efficient Solution
const twoSum = function (nums, target) {
  //Create an empty array.
  const comp = [];
  //Initialize a loop
  for (let i = 0; i < nums.length; i++) {
    //First check the num element in comp as index is greater than zero or not.
    if (comp[nums[i]] >= 0) {
      return console.log([comp[nums[i]], i]);
    }
    comp[target - nums[i]] = i;
  }
};

twoSum([2, 11, 7, 15], 9);

function twoSum(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    let value = target - nums[i];
    if (nums.indexOf(value) !== -1 && nums.indexOf(value) !== i) {
      return [i, nums.indexOf(value)];
    }
  }
}

let nums = [3, 2, 4];
let target = 6;
console.log(twoSum(nums, target));

// 167. Two Sum II - Input Array Is Sorted

var twoSum = function (numbers, target) {
  let start = 0;
  let end = numbers.length - 1;
  while (start < end) {
    let complement = numbers[start] + numbers[end];
    if (target === complement) {
      return [start + 1, end + 1];
    } else if (target > complement) {
      start++;
      continue;
    } else if (target < complement) {
      end--;
      continue;
    }
  }
};
