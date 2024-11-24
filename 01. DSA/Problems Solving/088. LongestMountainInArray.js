let arr = [5, 6, 1, 2, 3, 4, 5, 4, 3, 2, 0, 1, 2, 3, -2, 4];

var longestMountain = function (arr) {
  let highest = 0;
  for (let i = 1; i < arr.length - 1; ) {
    if (arr[i] > arr[i - 1] && arr[i] > arr[i + 1]) {
      let count = 1;
      let j = i;
      while (j > 0 && arr[j] > arr[j - 1]) {
        j--;
        count++;
      }
      while (i < arr.length && arr[i] > arr[i + 1]) {
        i++;
        count++;
      }
      highest = Math.max(highest, count);
    } else {
      i++;
    }
  }

  return console.log(highest);
};

longestMountain(arr);
