var leaderArray = function (arr, n) {
  let max_from_right = arr[n - 1];
  let arrOne = [];
  arrOne.push(max_from_right);
  for (let i = n - 2; i >= 0; i--) {
    if (max_from_right < arr[i]) {
      max_from_right = arr[i];
      arrOne.push(max_from_right);
    }
  }
  return console.log(arrOne.reverse());
};

leaderArray([16, 17, 4, 18, 3, 5, 2], 7);
