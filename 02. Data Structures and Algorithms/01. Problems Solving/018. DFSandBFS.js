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

  // DFS PreOrder Traversal
  preOrder(node = this.root) {
    if (node !== null) {
      console.log(node.value);
      this.preOrder(node.left);
      this.preOrder(node.right);
    }
  }

  // DFS InOrder Traversal
  inOrder(node = this.root) {
    if (node !== null) {
      this.inOrder(node.left);
      console.log(node.value);
      this.inOrder(node.right);
    }
  }

  // DFS PostOrder Traversal
  postOrder(node = this.root) {
    if (node !== null) {
      this.postOrder(node.left);
      this.postOrder(node.right);
      console.log(node.value);
    }
  }

  // BFS Level Order Traversal
  levelOrder() {
    const queue = [];
    if (this.root !== null) {
      queue.push(this.root);
      while (queue.length > 0) {
        const currentNode = queue.shift();
        console.log(currentNode.value);
        if (currentNode.left !== null) {
          queue.push(currentNode.left);
        }
        if (currentNode.right !== null) {
          queue.push(currentNode.right);
        }
      }
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

console.log("DFS PreOrder Traversal:");
binaryTree.preOrder();

console.log("\nDFS InOrder Traversal:");
binaryTree.inOrder();

console.log("\nDFS PostOrder Traversal:");
binaryTree.postOrder();

console.log("\nBFS Level Order Traversal:");
binaryTree.levelOrder();
