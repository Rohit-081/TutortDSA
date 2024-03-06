/* Given an array arr[] of size N of positive integers which may have duplicates. The task is to find the maximum and second maximum from the array, and both of them should be different from each other, so If no second max exists, then the second max will be -1. */

var largestAndSecondLargest = function (arr) {
  //1. Check the edge cases if the length is less than 2 than return console.log with arr[0], -1.
  if (arr.length < 2) return console.log(arr[0], -1);

  let firstMax = arr[0];
  let secondMax = -1;

  // The main logic is:
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > firstMax) {
      secondMax = firstMax;
      firstMax = arr[i];
    } else if (arr[i] > secondMax && arr[i] != firstMax) {
      secondMax = arr[i];
    }
  }

  return console.log([firstMax, secondMax]);
};

largestAndSecondLargest([2, 1, 2, 1000, 198277, 984848, 8874, 292839, 989]);
