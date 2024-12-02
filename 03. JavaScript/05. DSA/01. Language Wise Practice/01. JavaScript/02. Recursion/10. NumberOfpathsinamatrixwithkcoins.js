const matrix = [
  [1, 2, 3],
  [4, 6, 5],
  [3, 2, 1],
];
const K = 12;

function countWays(matrix, K, i = 0, j = 0, sum = 0, memo = {}) {
  if (i >= matrix.length || j >= matrix[0].length) {
    return 0;
  }
  if (i === matrix.length - 1 && j === matrix[0].length - 1) {
    return sum + matrix[i][j] === K ? 1 : 0;
  }
  const key = `${i},${j},${sum}`;
  if (memo[key] !== undefined) {
    return memo[key];
  }
  const ways =
    countWays(matrix, K, i + 1, j, sum + matrix[i][j], memo) +
    countWays(matrix, K, i, j + 1, sum + matrix[i][j], memo);
  memo[key] = ways;
  return ways;
}

const ways = countWays(matrix, K);
console.log(ways); // Output: 2

// Sure, here is the number of paths in a matrix with k coins solution in JavaScript using recursion:

// JavaScript
function numberOfPaths(matrix, m, n, k) {
  // Base cases
  if (m < 0 || n < 0 || k < 0) {
    return 0;
  }
  if (m == 0 && n == 0 && k == 0) {
    return 1;
  }

  // Recursive cases
  return (
    numberOfPaths(matrix, m - 1, n, k - matrix[m][n]) +
    numberOfPaths(matrix, m, n - 1, k - matrix[m][n])
  );
}

console.log("2", numberOfPaths(matrix, 2, 2, 12));

function countPaths(matrix, k) {
  const rows = matrix.length;
  const cols = matrix[0].length;

  function backtrack(row, col, coins) {
    if (row < 0 || row >= rows || col < 0 || col >= cols || coins < 0) {
      return 0;
    }

    if (row === rows - 1 && col === cols - 1) {
      return coins === matrix[row][col] ? 1 : 0;
    }

    const currentCoins = matrix[row][col];
    const paths =
      backtrack(row + 1, col, coins - currentCoins) +
      backtrack(row, col + 1, coins - currentCoins);

    return paths;
  }

  return backtrack(0, 0, k);
}

console.log("3", countPaths(matrix, 12)); // 2
