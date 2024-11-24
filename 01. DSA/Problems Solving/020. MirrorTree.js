class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = this.right = null;
  }
}

function areMirrors(root1, root2) {
  // Base case: if both roots are null, they are mirrors
  if (root1 === null && root2 === null) {
    return true;
  }

  // If only one of the roots is null, they are not mirrors
  if (root1 === null || root2 === null) {
    return false;
  }

  // Check if the values of corresponding nodes are equal
  // and if their subtrees are mirrors of each other
  return (
    root1.val === root2.val &&
    areMirrors(root1.left, root2.right) &&
    areMirrors(root1.right, root2.left)
  );
}

// Example usage:
const tree1 = new TreeNode(1);
tree1.left = new TreeNode(2);
tree1.right = new TreeNode(3);
tree1.right.left = new TreeNode(4);

const tree2 = new TreeNode(1);
tree2.left = new TreeNode(3);
tree2.right = new TreeNode(2);
tree2.left.right = new TreeNode(4);

console.log("Are the two trees mirrors?", areMirrors(tree1, tree2)); // Output: true
