class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  append(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
  }

  createCycle() {
    // Create a cycle for demonstration
    if (!this.head) {
      return;
    }

    let current = this.head;
    while (current.next) {
      current = current.next;
    }

    // Create a cycle by pointing the last node to the second node
    current.next = this.head.next;
  }

  hasCycle() {
    let slow = this.head;
    let fast = this.head;

    while (fast !== null && fast.next !== null) {
      slow = slow.next;
      fast = fast.next.next;

      if (slow === fast) {
        return true; // Cycle detected
      }
    }

    return false; // No cycle
  }
}

// Example Usage:
const myList = new LinkedList();
myList.append(1);
myList.append(2);
myList.append(3);
myList.append(4);
myList.append(5);

// Create a cycle for demonstration
myList.createCycle();

// Check if the linked list has a cycle
const hasCycle = myList.hasCycle();
console.log("Linked list has cycle:", hasCycle);
