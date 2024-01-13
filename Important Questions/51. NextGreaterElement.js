// Next Greater Element (NGE) for every element in given Array

// The Next greater Element for an element x is the first greater element on the right side of x in the array. Elements for which no greater element exist, consider the next greater element as -1.

// Example:

// Input: arr[] = [ 4 , 5 , 2 , 25 ]
// Output:  4      –>   5
//                5      –>   25
//                2      –>   25
//               25     –>   -1
// Explanation: except 25 every element has an element greater than them present on the right side

// Input: arr[] = [ 13 , 7, 6 , 12 ]
// Output:  13      –>    -1
//                 7       –>     12
//                 6       –>     12
//                12      –>     -1
// Explanation: 13 and 12 don’t have any element greater than them present on the right side

// Brute Force Solution
function printNGE(arr) {
  let result = new Array(arr.length).fill(-1);
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] > arr[i]) {
        result[i] = arr[j];
        break;
      }
    }
  }
  return result;
}

console.log(printNGE([4, 5, 2, 25]));

function printNGE(arr) {
  const result = new Array(arr.length).fill(-1);
  const stack = [];

  for (let i = 0; i < arr.length; i++) {
    while (stack.length > 0 && arr[i] > arr[stack[stack.length - 1]]) {
      const index = stack.pop();
      result[index] = arr[i];
    }
    stack.push(i);
  }

  return result;
}

// Example usage:
const arr1 = [4, 5, 2, 25];
console.log(printNGE(arr1));

const arr2 = [13, 7, 6, 12];
console.log(printNGE(arr2));
