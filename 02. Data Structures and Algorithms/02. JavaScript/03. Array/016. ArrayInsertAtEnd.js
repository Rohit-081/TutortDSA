// Insertion is a basic but frequently used operation. Arrays in most languages can not be dynamically shrinked or expanded. Here, we will work with such arrays and try to insert an element at the end of the array.

// Your Task:
// You don't need to read input or print anything. You only need to complete the function insertAtEnd() that takes arr, sizeOfArray, element as input and modifies arr as per requirements. The driver code takes care of the printing.

// Expected Time Complexity: O(1).
// Expected Auxiliary Space: O(1).

var insertNoAtEnd = function (arr, element) {
  arr.push(element);
  return arr;
};

console.log(insertNoAtEnd([1, 2, 3, 4, 5], 90));
