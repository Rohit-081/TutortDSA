class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = this.right = null;
  }
}

function findSmallestElement(root) {
  if (!root) {
    return null; // If the root is null, return null
  }

  // Traverse left until reaching the leftmost node
  while (root.left) {
    root = root.left;
  }

  return root.val; // Return the value of the leftmost node
}

// Example usage:
const root = new TreeNode(5);
root.left = new TreeNode(3);
root.right = new TreeNode(8);
root.left.left = new TreeNode(2);
root.left.right = new TreeNode(4);

console.log("Smallest element in the BST:", findSmallestElement(root)); // Output: 2
