function generate(numRows) {
  let arr = [];
  for (let i = 0; i < numRows; i++) {
    arr[i] = [];
    for (let j = 0; j <= i; j++) {
      if (j == 0 || j == i) {
        arr[i].push(1);
      } else {
        arr[i].push(arr[i - 1][j - 1] + arr[i - 1][j]);
      }
    }
  }
  return arr;
}

console.log(generate(6));

/**
 * @param {number} rowIndex
 * @return {number[]}
 */
function getRow(rowIndex) {
  let arr = [];
  for (let i = 0; i < rowIndex; i++) {
    arr[i] = [];
    for (let j = 0; j <= i; j++) {
      if (j == 0 || j == i) {
        arr[i].push(1);
      } else {
        arr[i].push(arr[i - 1][j - 1] + arr[i - 1][j]);
      }
    }
  }
  return arr[rowIndex - 1];
}

console.log(getRow(3));
