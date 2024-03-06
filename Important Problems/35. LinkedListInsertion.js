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

  traverse() {
    let current = this.head;
    while (current) {
      console.log(current.value);
      current = current.next;
    }
  }
}

let myList = new LinkedList();
myList.append(1);
myList.append(2);
myList.append(3);
myList.append(4);
myList.append(5);
myList.append(6);

console.log(myList.insert(30, 1));
console.log(myList.traverse());
