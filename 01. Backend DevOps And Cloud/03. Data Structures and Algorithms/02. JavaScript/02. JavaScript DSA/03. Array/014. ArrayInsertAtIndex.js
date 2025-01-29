// You are given an array arr(0-based index). The size of the array is given by sizeOfArray. You need to insert an element at given index and print the modified array.

// The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.

/* splice(start);
splice(start, deleteCount);
splice(start, deleteCount, item1);
splice(start, deleteCount, item1, item2, itemN); */

var insertAtIndex = function (arr, index, element) {
  arr.splice(index, 0, element);
  return arr;
};

console.log(insertAtIndex([1, 2, 3, 4, 5], 3, 90));
