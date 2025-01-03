// Initialize a variable maxANDValue to 0.
// Iterate over all pairs of distinct elements in the array arr[].
// For each pair (arr[i], arr[j]), compute the bitwise AND of the two elements using the '&' operator.
// If the result is greater than the current maxANDValue, update maxANDValue to the new result.
// Return the maxANDValue.

function findMaxANDValue(arr) {
  let n = arr.length;
  let maxANDValue = 0;

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      let andValue = arr[i] & arr[j];
      if (andValue > maxANDValue) {
        maxANDValue = andValue;
      }
    }
  }

  return maxANDValue;
}

function maxAND(arr, n) {
  arr.sort((a, b) => a - b);
  arr = arr
    .map((v, i, a) => {
      return v & a[i + 1];
    })
    .sort((a, b) => b - a);
  let ans = arr[0];
  return ans;
}
