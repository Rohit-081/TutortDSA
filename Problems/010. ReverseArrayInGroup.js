var reverseInGroups = function (arr, n, k) {
  for (let i = 0; i < n; i += k) {
    let left = i;
    let right = Math.min(i + k - 1, arr.length - 1);
    while (left < right) {
      let temp = arr[left];
      arr[left] = arr[right];
      arr[right] = arr[right];
      arr[right] = temp;
      left++;
      right--;
    }
  }
  return arr;
};
