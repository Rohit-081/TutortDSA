// Node class to represent each node in the linked list
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// LinkedList class to represent the linked list
class LinkedList {
  constructor() {
    this.head = null;
  }

  // Method to add a new node to the end of the linked list
  append(value) {
    const newNode = new Node(value);

    if (!this.head) {
      // If the list is empty, make the new node the head
      this.head = newNode;
    } else {
      // Otherwise, traverse the list and add the new node to the end
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
  }

  // Method to traverse and print the linked list
  traverse() {
    let current = this.head;
    while (current) {
      console.log(current.value);
      current = current.next;
    }
  }

  // Method to count the number of nodes in the linked list
  count() {
    let count = 0;
    let current = this.head;
    while (current) {
      count++;
      current = current.next;
    }
    return count;
  }

  // Method to search for a value in the linked list
  search(key) {
    let current = this.head;
    while (current) {
      if (current.value === key) {
        return true;
      }
      current = current.next;
    }
    return false;
  }

  // Method to find the value of the k-th node
  kthNode(k) {
    let count = 1;
    let current = this.head;
    while (current) {
      if (count === k) {
        return current.value;
      }
      count++;
      current = current.next;
    }
    return false;
  }

  // Method to find the value of the k-th node from the end
  kthNodeFromEnd(k) {
    let nodeCount = this.count();
    let l = nodeCount - k + 1;
    let count = 1;
    let current = this.head;
    while (current) {
      if (count === l) {
        return current.value;
      }
      count++;
      current = current.next;
    }
    return false;
  }

  kthNodeFromEndOptimise(k) {
    if (k <= 0) {
      return false;
    }

    let slow = this.head;
    let fast = this.head;

    // Move the fast pointer k nodes ahead
    for (let i = 0; i < k; i++) {
      if (fast === null) {
        // If the list is shorter than k nodes, return false
        return false;
      }
      fast = fast.next;
    }

    // Move both pointers until the fast pointer reaches the end
    while (fast !== null) {
      slow = slow.next;
      fast = fast.next;
    }

    // The slow pointer is now at the k-th node from the end
    return slow.value;
  }

  insert(element, k) {
    const newNode = new Node(element);
    if (k === 0) {
      newNode.next = this.head;
      this.head = newNode;
      return;
    }

    let prev = this.head;
    for (let i = 0; i < k - 1; i++) {
      prev = prev.next;
    }

    newNode.next = prev.next;
    prev.next = newNode;
  }

  delete(k) {
    if (k == 0) {
      this.head = this.head.next;
      return;
    }
    let prev = this.head;
    for (let i = 0; i < k - 1; i++) {
      prev = prev.next;
    }
    prev.next = prev.next.next;
  }
}

// Example usage:
const myList = new LinkedList();
myList.append(1);
myList.append(2);
myList.append(3);

// Traverse and print the linked list
myList.traverse();

// Count the number of nodes
const nodeCount = myList.count();
console.log("Number of nodes:", nodeCount);

// Search for a value
const searchResult = myList.search(2);
console.log("Value 2 found:", searchResult);

// Find the value of the 2nd node
const kthNodeValue = myList.kthNode(2);
console.log("Value of the 2nd node:", kthNodeValue);

// Find the value of the 2nd node from the end
const kthNodeFromEndValue = myList.kthNodeFromEnd(2);
console.log("Value of the 2nd node from the end:", kthNodeFromEndValue);

const kthNodeFromEndValueOptimise = myList.kthNodeFromEndOptimise(2);
console.log("Value of the 2nd node from the end:", kthNodeFromEndValueOptimise);

myList.insert(30, 2);
myList.traverse();

myList.delete(3);
myList.traverse();
