var arr = [1, 0, 0, 0, 3, 0, 5, 6];
var count = 0;
for (var i = 0; i < arr.length; i++) {
  if (arr[i] == 0) {
    arr.splice(i, 1);
    count++;
    i--;
  }
}
for (var j = 0; j < count; j++) {
  arr.push(0);
}
console.log(arr);

var moveZeroes = function (nums) {
  let nonZeroIndex = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] != 0) {
      let temp = nums[i];
      nums[i] = nums[nonZeroIndex];
      nums[nonZeroIndex] = temp;

      nonZeroIndex++;
    }
  }
  return nums;
};

console.log(moveZeroes([0, 0, 1]));
