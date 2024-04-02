function rightSum(root) {
  if (root === null) {
    return 0;
  }

  return root.data + rightSum(root.right);
}

// Example usage:
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

console.log("Sum of all right nodes:", rightSum(root)); // Output: 4
