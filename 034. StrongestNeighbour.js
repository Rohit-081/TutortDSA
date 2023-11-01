const arr6 = [1, 2, 2, 3, 4, 5];
const arr = [8, 2, 2, 3, 4, 5];

function maximumAdjacent(arr) {
  let arry7 = [];
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i + 1] > arr[i]) {
      arry7.push(arr[i + 1]);
    } else {
      arry7.push(arr[i]);
    }
  }
  return console.log(arry7);
}
maximumAdjacent(arr6);
maximumAdjacent(arr);