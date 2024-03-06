var equilibriumPoint = function (arr, n) {
  if (n == 1) {
    return 1;
  }
  var prefixSum = Array(n).fill(0);
  prefixSum[0] = arr[0];
  for (let i = 1; i < n; i++) {
    prefixSum[i] = prefixSum[i - 1] + arr[i];
  }

  var suffixSum = Array(n).fill(0);
  suffixSum[n - 1] = arr[n - 1];
  for (let i = n - 2; i >= 0; i--) {
    suffixSum[i] = suffixSum[i + 1] + arr[i];
  }
  for (i = 1; i < n - 1; i++) {
    if (prefixSum[i] == suffixSum[i]) {
      return console.log(arr[i]);
    }
  }
  return console.log(-1);
};

equilibriumPoint([1, 3, 5, 2, 2], 5);
equilibriumPoint([1, 3, 5, 1, 2], 5);
