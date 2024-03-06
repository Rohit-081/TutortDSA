// find the only non-repeating element in an array where every elements repeats twice in javascript

function findNonRepeatingElement(arr) {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    result ^= arr[i];
  }
  return result;
}

console.log(findNonRepeatingElement([5, 8, 3, 4, 5, 4, 3, 7, 8]));
