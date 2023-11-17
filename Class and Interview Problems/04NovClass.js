function fizzbuzz(n) {
  let newArr = [];
  for (let i = 0; i < n; i++) {
    if ((i + 1) % 3 == 0 && (i + 1) % 5 == 0) {
      newArr.push("FizzBuzz");
    } else if ((i + 1) % 3 == 0 && (i + 1) % 5 != 0) {
      newArr.push("Fizz");
    } else if ((i + 1) % 3 != 0 && (i + 1) % 5 == 0) {
      newArr.push("Buzz");
    } else {
      newArr.push((i + 1).toString());
    }
  }
  return newArr;
}

console.log(fizzbuzz(15));

// let mat = [[1,2,3,4],[5,6,7,8],[9,10,11,12]];

function matrixSum(mat) {
  let sum = 0;
  for (let i = 0; i < mat.length; i++) {
    for (j = 0; j < mat[i].length; j++) {
      sum += mat[i][j];
    }
  }
  return sum;
}

console.log(matrixSum(mat));

let mat = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

function diagonalDifference(mat) {
  let sum1 = 0;
  let sum2 = 0;
  for (let i = 0; i < mat.length; i++) {
    for (j = 0; j < mat.length; j++) {
      if (i == j) {
        sum1 += mat[i][j];
      }
      if (i + j == mat.length - 1) {
        sum2 += mat[i][j];
      }
    }
  }
  return Math.abs(sum1 - sum2);
}

console.log(diagonalDifference(mat));

//LeetCode : 1672. Richest Customer Wealth
var maximumWealth = function (accounts) {
  let maxProfit = 0;
  for (let i = 0; i < accounts.length; i++) {
    let sum = 0;
    for (let j = 0; j < accounts[i].length; j++) {
      sum += accounts[i][j];
    }
    maxProfit = maxProfit > sum ? maxProfit : sum;
  }
  return maxProfit;
};
