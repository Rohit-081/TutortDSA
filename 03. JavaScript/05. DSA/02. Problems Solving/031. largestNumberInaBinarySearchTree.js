class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = this.right = null;
  }
}

function findLargestLessThanOrEqualToK(root, k) {
  let largest = Number.MIN_SAFE_INTEGER; // Initialize largest as smallest possible value

  // Traverse the BST in in-order manner
  while (root) {
    // If current node's value is less than or equal to K, update largest and move to right subtree
    if (root.val <= k) {
      largest = Math.max(largest, root.val);
      root = root.right;
    } else {
      // If current node's value is greater than K, move to left subtree
      root = root.left;
    }
  }

  return largest;
}

// Example usage:
const root = new TreeNode(5);
root.left = new TreeNode(3);
root.right = new TreeNode(8);
root.left.left = new TreeNode(2);
root.left.right = new TreeNode(4);

const k = 6;

console.log("Largest number <= K:", findLargestLessThanOrEqualToK(root, k)); // Output: 5
