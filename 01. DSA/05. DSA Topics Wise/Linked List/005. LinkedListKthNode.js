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

  KthNode(k) {
    if (k <= 0) {
      return false;
    }

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
}

let myList = new LinkedList();
myList.append(1);
myList.append(2);
myList.append(3);
myList.append(4);
myList.append(5);
myList.append(6);

console.log(myList.KthNode(3));
console.log(myList.KthNode(7));
