var occurence = function (arr1, arr2) {
  const occur = {};
  const result = {};

  for (let i = 0; i < arr2.length; i++) {
    if (occur.hasOwnProperty(arr2[i])) {
      occur[arr2[i]] = occur[arr2[i]] + 1;
    } else {
      occur[arr2[i]] = 1;
    }
  }
  for (let i = 0; i < arr1.length; i++) {
    if (occur.hasOwnProperty(arr1[i])) {
      result[arr1[i]] = occur[arr1[i]];
    }
  }
  console.log(occur);
  console.log(result);
};

occurence([1, 2, 3, 4, 5, 6, 7], [1, 2, 3, 4, 5, 1, 2, 3, 9]);
