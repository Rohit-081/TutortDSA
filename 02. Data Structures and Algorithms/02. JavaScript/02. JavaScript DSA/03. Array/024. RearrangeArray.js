var rearrange = function (arr, n) {
  let temp = new Array(n);
  let small = 0;
  let large = n - 1;
  let flag = true;
  for (let i = 0; i < n; i++) {
    if (flag) {
      temp[i] = arr[large--];
    } else {
      temp[i] = arr[small++];
    }
    flag = !flag;
  }
  for (let i = 0; i < n; i++) {
    arr[i] = temp[i];
  }
  return console.log(arr);
};

rearrange([1, 2, 3, 4, 5, 6], 6);
