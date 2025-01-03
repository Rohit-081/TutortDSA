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

  count() {
    let count = 0;
    let current = this.head;
    while (current) {
      count++;
      current = current.next;
    }
    return count;
  }

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

    for (let i = 0; i < k; i++) {
      if (fast === null) {
        return false;
      }
      fast = fast.next;
    }

    while (fast != null) {
      slow = slow.next;
      fast = fast.next;
    }
    return slow.value;
  }
}

let myList = new LinkedList();
myList.append(1);
myList.append(2);
myList.append(3);
myList.append(4);
myList.append(5);
myList.append(6);

console.log(myList.kthNodeFromEnd(3));
console.log(myList.kthNodeFromEnd(7));
console.log(myList.kthNodeFromEndOptimise(3));
console.log(myList.kthNodeFromEndOptimise(7));
