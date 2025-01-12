class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = this.right = null;
  }
}

function leftView(root) {
  if (!root) return [];

  const result = [];
  const queue = [root];

  while (queue.length) {
    const levelSize = queue.length;

    for (let i = 0; i < levelSize; i++) {
      const node = queue.shift();
      if (i === 0) {
        result.push(node.val); // Add the first node encountered at each level
      }
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
  }

  return result;
}

function rightView(root) {
  if (!root) return [];

  const result = [];
  const queue = [root];

  while (queue.length) {
    const levelSize = queue.length;

    for (let i = 0; i < levelSize; i++) {
      const node = queue.shift();
      if (i === levelSize - 1) {
        result.push(node.val); // Add the last node encountered at each level
      }
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
  }

  return result;
}

// Example usage:
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.right = new TreeNode(4);
root.right.left = new TreeNode(5);
root.right.right = new TreeNode(6);

console.log("Left view of the binary tree:", leftView(root)); // Output: [1, 2, 4]
console.log("Right view of the binary tree:", rightView(root)); // Output: [1, 3, 6]
