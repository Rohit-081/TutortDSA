class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = this.right = null;
  }
}

function isSymmetric(root) {
  if (root === null) {
    return true; // An empty tree is symmetric
  }

  return isMirror(root.left, root.right);
}

function isMirror(tree1, tree2) {
  if (tree1 === null && tree2 === null) {
    return true; // Both trees are empty, hence symmetric
  }

  if (tree1 === null || tree2 === null) {
    return false; // One of the trees is empty, hence not symmetric
  }

  // Check if the values of corresponding nodes are equal
  // and if their subtrees are mirrors of each other
  return (
    tree1.val === tree2.val &&
    isMirror(tree1.left, tree2.right) &&
    isMirror(tree1.right, tree2.left)
  );
}

// Example usage:
const root1 = new TreeNode(1);
root1.left = new TreeNode(2);
root1.right = new TreeNode(2);
root1.left.left = new TreeNode(3);
root1.left.right = new TreeNode(4);
root1.right.left = new TreeNode(4);
root1.right.right = new TreeNode(3);

console.log("Example 1 Output:", isSymmetric(root1)); // Output: true

const root2 = new TreeNode(1);
root2.left = new TreeNode(2);
root2.right = new TreeNode(2);
root2.left.right = new TreeNode(3);
root2.right.right = new TreeNode(3);

console.log("Example 2 Output:", isSymmetric(root2)); // Output: false
