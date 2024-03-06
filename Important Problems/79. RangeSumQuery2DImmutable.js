/**
 * @param {number[][]} matrix
 */
var NumMatrix = function (matrix) {
  if (!matrix || matrix.length === 0 || matrix[0].length === 0) {
    this.cumulativeSumMatrix = [[]];
    return;
  }

  const m = matrix.length;
  const n = matrix[0].length;

  this.cumulativeSumMatrix = new Array(m + 1)
    .fill(0)
    .map(() => new Array(n + 1).fill(0));

  // Calculate the cumulative sum matrix
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      this.cumulativeSumMatrix[i][j] =
        matrix[i - 1][j - 1] +
        this.cumulativeSumMatrix[i - 1][j] +
        this.cumulativeSumMatrix[i][j - 1] -
        this.cumulativeSumMatrix[i - 1][j - 1];
    }
  }
};

/**
 * @param {number} row1
 * @param {number} col1
 * @param {number} row2
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function (row1, col1, row2, col2) {
  if (
    !this.cumulativeSumMatrix ||
    this.cumulativeSumMatrix.length === 0 ||
    this.cumulativeSumMatrix[0].length === 0
  ) {
    return 0;
  }

  return (
    this.cumulativeSumMatrix[row2 + 1][col2 + 1] -
    this.cumulativeSumMatrix[row1][col2 + 1] -
    this.cumulativeSumMatrix[row2 + 1][col1] +
    this.cumulativeSumMatrix[row1][col1]
  );
};

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix);
 * var param_1 = obj.sumRegion(row1, col1, row2, col2);
 */

// Example usage:
var numMatrix = new NumMatrix([
  [3, 0, 1, 4, 2],
  [5, 6, 3, 2, 1],
  [1, 2, 0, 1, 5],
  [4, 1, 0, 1, 7],
  [1, 0, 3, 0, 5],
]);

console.log(numMatrix.sumRegion(2, 1, 4, 3)); // Output: 8
console.log(numMatrix.sumRegion(1, 1, 2, 2)); // Output: 11
console.log(numMatrix.sumRegion(1, 2, 2, 4)); // Output: 12
