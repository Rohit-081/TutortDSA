class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = this.right = null;
  }
}

function sumOfNodes(root) {
  if (root === null) {
    return 0; // If the root is null, the sum is 0
  } else {
    // Recursively calculate the sum of nodes in the left and right subtrees
    const leftSum = sumOfNodes(root.left);
    const rightSum = sumOfNodes(root.right);

    // Return the total sum including the current node
    return root.val + leftSum + rightSum;
  }
}

// Example usage:
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

console.log("Sum of all nodes in the binary tree:", sumOfNodes(root)); // Output: 15
