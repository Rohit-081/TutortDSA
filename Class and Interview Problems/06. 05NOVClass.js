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

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  let result = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      result.push(i);
    }
  }
  if (result.length == 1) {
    result.push(result[0]);
  }
  if (result.length > 2) {
    result.splice(1, result.length - 2);
  }
  return result.length > 0 ? result : [-1, -1];
};

// LC-1299: Replace Elements with Greatest Element on Right Side

var replaceElements = function (arr) {
  // for(let i = 0; i < arr.length; i++){
  //     let max = 0;
  //     for(let j = i+1; j < arr.length; j++){
  //         max = max > arr[j] ? max : arr[j];
  //     }
  //     arr[i] = max
  // }
  // arr[arr.length - 1] = -1
  // return arr
  let max = -1;
  for (let i = arr.length - 1; i >= 0; i--) {
    const currentElement = arr[i];
    arr[i] = max;
    if (currentElement > max) {
      max = currentElement;
    }
  }
  return arr;
};

console.log(replaceElements([17, 18, 5, 4, 6, 1]));
