function pair(arr, sum) {
  let s = new Set();
  let val = 0;
  for (let i = 0; i < arr.length; i++) {
    if (sum > arr[i]) {
      val = sum - arr[i];
    } else {
      val = arr[i] - sum;
    }
    if (s.has(val)) {
      console.log(val, arr[i]);
      break;
    }
    if (!s.has(arr[i])) {
      s.add(arr[i]);
    }
  }
  return -1;
 }

console.log(pair([10, 5, 2, 3, -6, 9, 11], 4));
