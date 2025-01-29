class TreeNode {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

function leftSum(root) {
  if (root === null) {
    return 0;
  }

  return root.data + leftSum(root.left);
}

// Example usage:
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

console.log("Sum of all left nodes:", leftSum(root)); // Output: 7
