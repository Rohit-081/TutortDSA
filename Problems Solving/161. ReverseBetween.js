/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val === undefined ? 0 : val)
 *     this.next = (next === undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function (head, left, right) {
  let current = head;
  let count = 0;
  let previous = null;

  // Move to the position 'left - 1'
  while (count < left - 1) {
    previous = current;
    current = current.next;
    count++;
  }

  let start = previous; // the node before the reverse portion
  let end = current; // the first node of the reverse portion

  // Reverse the portion from 'left' to 'right'
  for (let i = 0; i <= right - left; i++) {
    let temp = current.next;
    current.next = previous;
    previous = current;
    current = temp;
  }

  if (start) {
    start.next = previous;
  } else {
    head = previous; // If reversing from the beginning, update the head
  }

  end.next = current; // Connect the end of the reversed portion with the rest of the list

  return head;
};
