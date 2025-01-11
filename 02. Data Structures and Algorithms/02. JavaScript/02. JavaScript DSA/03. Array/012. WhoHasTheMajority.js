/* Given an array arr[] of size N and two elements x and y, use counter variables to find which element appears most in the array, x or y. If both elements have the same frequency, then return the smaller element.
Note:  We need to return the element, not its count. */

// 1. Initialize two counts countA and countB.
// 2. Start a incremental for loop, starting i is 0 and till the count of arr.length - 1.
// 3. In If loop check whether the current no. in for loop is similar to the x or y and then icrement the count.

var majorityWins = function (arr, x, y) {
  let a = x;
  let b = y;
  let countA = 0;
  let countB = 0;
  for (let i = 0; i < arr.length; i++) {
    if (a === arr[i]) {
      countA = countA + 1;
    }
    if (b === arr[i]) {
      countB = countB + 1;
    }
  }
  if (countA !== countB) {
    var result = countA > countB ? a : b;
    return result;
  } else {
    if (a < b) {
      return a;
    } else {
      return b;
    }
  }
};

console.log(majorityWins([1, 1, 2, 2, 3, 3, 4, 4, 4, 4, 5], 4, 5));
console.log(majorityWins([1, 2, 2, 3, 3, 4, 4, 5], 2, 3));
