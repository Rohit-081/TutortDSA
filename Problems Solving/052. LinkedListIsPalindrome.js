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

  reverse() {
    let current = this.head;
    let previous = null;
    while (current !== null) {
      let temp = current.next;
      current.next = previous;
      previous = current;
      current = temp;
    }
    return previous;
  }

  middle() {
    let slow = this.head;
    let fast = this.head;
    while (fast !== null && fast.next !== null) {
      slow = slow.next;
      fast = fast.next.next;
    }
    return slow;
  }

  isPalindrome() {
    if (this.head === null) {
      return true;
    }
    let mid = this.middle(this.head);
    let last = this.reverse(mid.next);
    let current = this.head;
    while (last !== null) {
      if (last.value != current.value) {
        return false;
      }
      last = last.next;
      current = current.next;
    }
    return true;
  }
}

let myList = new LinkedList();
myList.append("R");
myList.append("A");
myList.append("C");
myList.append("E");
myList.append("C");
myList.append("A");
myList.append("R");

console.log(myList.isPalindrome());
