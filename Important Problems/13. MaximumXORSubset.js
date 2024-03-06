// Initialize a variable max_xor to 0.
// Iterate over all possible subsets of the array arr[].
// For each subset, compute the XOR value of all the elements in the subset.
// If the result is greater than the current max_xor, update max_xor to the new result.
// Return max_xor.

function findMaxXOR(arr) {
  let n = arr.length;
  let max_xor = 0;

  // iterate over all possible subsets of arr[]
  for (let i = 0; i < 1 << n; i++) {
    let subset_xor = 0;
    // compute the XOR value of all elements in the current subset
    for (let j = 0; j < n; j++) {
      if ((i & (1 << j)) !== 0) {
        subset_xor ^= arr[j];
      }
    }
    // update max_xor if the current subset XOR value is greater
    if (subset_xor > max_xor) {
      max_xor = subset_xor;
    }
  }

  return max_xor;
}

console.log(findMaxXOR([2, 4, 5]));
