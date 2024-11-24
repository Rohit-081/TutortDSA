/* Time Complexity: O(n)
Auxiliary Space: O(1) */

var findMinOps = function (arr, n) {
  let ans = 0;
  let i = 0;
  let j = n - 1;
  while (i < j) {
    if (arr[i] === arr[j]) {
      i++;
      j--;
    } else if (arr[i] > arr[j]) {
      j--;
      arr[j] += arr[j + 1];
      ans++;
    } else {
      i++;
      arr[i] += arr[i - 1];
      ans++;
    }
  }
  return console.log(ans);
};

findMinOps([1, 4, 5, 9, 1], 5);
