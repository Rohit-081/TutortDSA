let matrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
];

function transpose(matrix) {
  let col = matrix[0].length;
  let row = matrix.length;
  let newMatrix = [];
  for (let i = 0; i < col; i++) {
    newMatrix.push([]);
    for (let j = 0; j < row; j++) {
      newMatrix[i].push(matrix[j][i]);
    }
  }
  return newMatrix;
}

console.log(transpose(matrix));

let arr = [5, 2, 1, 3, 4, -6, -2];

function linearSearch(arr, key) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === key) {
      return i;
    }
  }
  return -1;
}

console.log(linearSearch(arr, -6));
console.log(linearSearch(arr, 10));

// LC - First and Last Index of an Element in a Sorted Array
// https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/

// LC-1299: Replace Elements with Greatest Element on Right Side
