class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = this.right = null;
  }
}

function areIdentical(tree1, tree2) {
  // If both trees are empty, they are identical
  if (tree1 === null && tree2 === null) {
    return true;
  }

  // If one of the trees is empty, they are not identical
  if (tree1 === null || tree2 === null) {
    return false;
  }

  // Check if the values of corresponding nodes are equal
  // and if their subtrees are identical
  return (
    tree1.val === tree2.val &&
    areIdentical(tree1.left, tree2.left) &&
    areIdentical(tree1.right, tree2.right)
  );
}

// Example usage:
const root1 = new TreeNode(1);
root1.left = new TreeNode(2);
root1.right = new TreeNode(3);

const root2 = new TreeNode(1);
root2.left = new TreeNode(2);
root2.right = new TreeNode(3);

console.log("Are the two trees identical?", areIdentical(root1, root2)); // Output: true
