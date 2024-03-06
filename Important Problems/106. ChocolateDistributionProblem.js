function MinDiff(arr, n, m) {
  //If m no. of people or If n no. of packets are zero then the result is zero.
  if (m === 0 || n === 0) return console.log(0);
  //If no. of packets is less than the no. of people then the result is -1.
  if (n < m) return console.log(-1);
  //Sort the no. of packets.
  arr.sort((a, b) => a - b);
  //Min difference is initialize.
  let min_diff = Number.MAX_VALUE;
  //loop initialize with prefix sum
  for (let i = 0; i + m - 1 < n; i++) {
    let diff = arr[i + m - 1] - arr[i];
    if (diff < min_diff) min_diff = diff;
  }
  return console.log(min_diff);
}
MinDiff([3, 4, 1, 9, 56, 7, 9, 12], 8, 5);
