//find the two non-repeating elements in an array where every elements repeats twice in javascript

// To find the two non-repeating elements in an array where every other element repeats twice, we can modify the XOR approach used in the previous answer. The idea is to first take the XOR of all the elements in the array, which will give us the XOR of the two non-repeating elements. We can then find the rightmost set bit in this XOR value and use it to partition the array into two subarrays - one with elements that have this bit set, and one with elements that have this bit unset. The two non-repeating elements will be in different subarrays. We can then take the XOR of each subarray to find the two non-repeating elements.

// Here's the JavaScript code to implement this:

function findNonRepeatingElements(arr) {
  let xorAll = 0;
  for (let i = 0; i < arr.length; i++) {
    xorAll ^= arr[i];
  }

  // Find the rightmost set bit in xorAll
  let rightmostSetBit = 1;
  while ((rightmostSetBit & xorAll) === 0) {
    rightmostSetBit <<= 1;
  }

  let num1 = 0,
    num2 = 0;
  for (let i = 0; i < arr.length; i++) {
    if ((arr[i] & rightmostSetBit) === 0) {
      num1 ^= arr[i];
    } else {
      num2 ^= arr[i];
    }
  }

  return [num1, num2];
}

console.log(findNonRepeatingElements([5, 8, 3, 4, 2, 5, 4, 3, 7, 8]));
