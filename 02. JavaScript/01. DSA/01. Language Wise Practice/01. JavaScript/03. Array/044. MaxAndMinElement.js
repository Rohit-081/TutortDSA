var getMinMax = function (arr, n) {
  //Initialize with first element of array.
  let min = arr[0];
  let max = arr[0];
  //Checking the edge cases.
  //1. If (n === 0)
  if (n === 0) {
    return console.log(0);
  }
  //2. If (n === 1)
  if (n === 1) {
    min = arr[0];
    max = arr[0];
    return console.log(min, max);
  }
  //3. Start the for loop.
  for (let j = 1; j < n; j++) {
    if (min > arr[j]) {
      return (min = arr[j]);
    }
    if (max <= arr[j]) {
      return (max = arr[j]);
    }
  }
  return console.log(min, max);
};

getMinMax([3, 2, 1, 56, 10000, 167], 6);
