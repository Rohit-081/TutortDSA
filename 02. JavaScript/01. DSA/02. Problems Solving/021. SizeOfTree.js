class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = this.right = null;
  }
}

function treeSize(root) {
  if (root === null) {
    return 0; // If the root is null, the size is 0
  } else {
    // Recursively calculate the size of the left and right subtrees
    const leftSize = treeSize(root.left);
    const rightSize = treeSize(root.right);

    // Return the total size including the current node
    return leftSize + rightSize + 1;
  }
}

function treeMax(root) {
  if (root === null) {
    return Number.MIN_SAFE_INTEGER; // If the root is null, return the smallest possible value
  } else {
    // Recursively find the maximum value in the left and right subtrees
    const leftMax = treeMax(root.left);
    const rightMax = treeMax(root.right);

    // Return the maximum value among the current node, left subtree, and right subtree
    return Math.max(root.val, leftMax, rightMax);
  }
}

function treeMin(root) {
  if (root === null) {
    return Number.MAX_SAFE_INTEGER; // If the root is null, return the largest possible value
  } else {
    // Recursively find the minimum value in the left and right subtrees
    const leftMin = treeMin(root.left);
    const rightMin = treeMin(root.right);

    // Return the minimum value among the current node, left subtree, and right subtree
    return Math.min(root.val, leftMin, rightMin);
  }
}

// Example usage:
const root = new TreeNode(10);
root.left = new TreeNode(5);
root.right = new TreeNode(15);
root.right.left = new TreeNode(12);
root.right.right = new TreeNode(20);

console.log("Size of the binary tree:", treeSize(root)); // Output: 5
console.log("Maximum value in the binary tree:", treeMax(root)); // Output: 20
console.log("Minimum value in the binary tree:", treeMin(root)); // Output: 5
