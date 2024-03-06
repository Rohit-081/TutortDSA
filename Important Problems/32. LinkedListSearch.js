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
}

let myList = new LinkedList();
myList.append(1);
myList.append(2);
myList.append(3);
myList.append(4);
myList.append(5);
myList.append(6);

console.log(myList.search(6));
console.log(myList.search(7));
