class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  // Function to find the height of the binary tree
  height(node = this.root) {
    if (node === null) {
      return -1; // Height of an empty tree is -1
    } else {
      // Recursively calculate the height of left and right subtrees
      const leftHeight = this.height(node.left);
      const rightHeight = this.height(node.right);

      // Return the maximum height between left and right subtrees, plus 1 for the current node
      return Math.max(leftHeight, rightHeight) + 1;
    }
  }
}

// Example usage:
const binaryTree = new BinaryTree();
binaryTree.root = new TreeNode(1);
binaryTree.root.left = new TreeNode(2);
binaryTree.root.right = new TreeNode(3);
binaryTree.root.left.left = new TreeNode(4);
binaryTree.root.left.right = new TreeNode(5);
binaryTree.root.right.left = new TreeNode(6);

console.log("Height of the binary tree:", binaryTree.height());

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val === undefined ? 0 : val)
 *     this.left = (left === undefined ? null : left)
 *     this.right = (right === undefined ? null : right)
 * }
 */

/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
  if (root === null) {
    return 0; // If the root is null, the depth is 0
  } else {
    // Recursively calculate the depth of the left and right subtrees
    const leftDepth = maxDepth(root.left);
    const rightDepth = maxDepth(root.right);

    // Return the maximum depth between left and right subtrees, plus 1 for the current node
    return Math.max(leftDepth, rightDepth) + 1;
  }
};
