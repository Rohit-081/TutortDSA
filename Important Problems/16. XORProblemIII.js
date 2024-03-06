// To find the only non-repeating element in an array where every element repeats thrice, we can use a bit counting approach. We can create a 32-bit array to store the count of each bit position in all the elements of the input array. We then iterate over this count array and take the modulus of each count with 3. The resulting count array will have a 1 at the bit positions of the non-repeating element. We can then use this count array to reconstruct the non-repeating element.

// Here's the JavaScript code to implement this:
// find the only non-repeating elements in an array where every elements repeats thrice in javascript
function findNonRepeatingElement(arr) {
  const count = new Array(32).fill(0);
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < 32; j++) {
      if ((arr[i] & (1 << j)) !== 0) {
        count[j]++;
      }
    }
  }

  let result = 0;
  for (let j = 0; j < 32; j++) {
    if (count[j] % 3 !== 0) {
      result |= 1 << j;
    }
  }

  return result;
}

console.log(findNonRepeatingElement([5, 8, 3, 4, 2, 5, 4, 3, 8, 5, 8, 4, 3]));
