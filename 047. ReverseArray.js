var arrayReversal = function (arr) {
  let temp;
  for (let i = 0, j = arr.length - 1; i <= j; i++, j--) {
    temp = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = temp;
  }
  return console.log(arr);
};

arrayReversal([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
arrayReversal([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);
