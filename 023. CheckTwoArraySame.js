var areEqual = function (arr1, arr2) {
  let n = arr1.length;
  let m = arr2.length;

  if (n != m) {
    return console.log(false);
  }

  arr1.sort();
  arr2.sort();

  for (let i = 0; i < n; i++) {
    if (arr1[i] != arr2[i]) {
      return console.log(false);
    }
  }

  return console.log(true);
};

areEqual([2, 3, 4, 1], [1, 2, 3, 4]);
