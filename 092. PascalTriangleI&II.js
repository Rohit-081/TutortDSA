// 118. Pascal's Triangle
// Easy
// 12K
// 382
// Companies
// Given an integer numRows, return the first numRows of Pascal's triangle.

// In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:

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

// /**
//  * @param {number} rowIndex
//  * @return {number[]}
//  */

// 119. Pascal's Triangle II
// Easy
// 4.6K
// 321
// Companies
// Given an integer rowIndex, return the rowIndexth (0-indexed) row of the Pascal's triangle.

// In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:
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
