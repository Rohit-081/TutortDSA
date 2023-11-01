var zigzag = function (arr, n) {
  let flag = true;
  let temp;
  for (let i = 0; i <= n - 2; i++) {
    if (flag) {
      if (arr[i] > arr[i + 1]) {
        temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
      }
    } else {
      if (arr[i] < arr[i + 1]) {
        temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
      }
    }
    flag = !flag;
  }
  return console.log(arr);
};

zigzag([4, 3, 7, 8, 6, 2, 1], 7);
zigzag([1, 2, 3, 4, 6, 5, 7], 7);
