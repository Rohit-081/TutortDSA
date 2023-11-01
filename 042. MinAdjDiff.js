//Minimum Adjacent difference in circular array
function minAdjDiff(arr) {
  // Edge Case If length is less than two then return the first element.
  if (arr.length < 2) return console.log(arr[0]);
  // Calculate initial diff of first element and last element.
  let diff = Math.abs(arr[0] - arr[arr.length - 1]);

  for (let i = 0; i < arr.length - 1; i++) {
    if (Math.abs(arr[i] - arr[i + 1]) < diff) {
      diff = Math.abs(arr[i] - arr[i + 1]);
    }
  }

  return console.log(diff);
}
minAdjDiff([8, -8, 9, -9, 10, -11, 12]);
