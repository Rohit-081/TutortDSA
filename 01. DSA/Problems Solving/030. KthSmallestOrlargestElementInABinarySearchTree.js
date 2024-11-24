class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = this.right = null;
  }
}

function inOrderTraversal(root, result) {
  if (!root) {
    return;
  }

  inOrderTraversal(root.left, result);
  result.push(root.val);
  inOrderTraversal(root.right, result);
}

function kthSmallestElement(root, k) {
  const result = [];
  inOrderTraversal(root, result);

  if (k > 0 && k <= result.length) {
    return result[k - 1];
  } else {
    return null; // Kth smallest element does not exist
  }
}

// Example usage:
const root = new TreeNode(5);
root.left = new TreeNode(3);
root.right = new TreeNode(8);
root.left.left = new TreeNode(2);
root.left.right = new TreeNode(4);

const k = 3;

console.log(
  `The ${k}th smallest element in the BST:`,
  kthSmallestElement(root, k)
); // Output: 4
