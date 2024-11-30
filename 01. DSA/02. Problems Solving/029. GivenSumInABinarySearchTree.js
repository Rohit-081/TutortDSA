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

function twoSuminBST(root, target) {
  const result = [];
  inOrderTraversal(root, result);

  let left = 0;
  let right = result.length - 1;
  const pairs = [];

  while (left < right) {
    const sum = result[left] + result[right];
    if (sum === target) {
      pairs.push([result[left], result[right]]);
      left++;
      right--;
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }

  return pairs;
}

// Example usage:
const root = new TreeNode(15);
root.left = new TreeNode(10);
root.right = new TreeNode(20);
root.left.left = new TreeNode(8);
root.left.right = new TreeNode(12);
root.right.left = new TreeNode(16);
root.right.right = new TreeNode(24);

const target = 28;

console.log("Pairs with the given sum:", twoSuminBST(root, target)); // Output: [[8, 20], [12, 16]]
