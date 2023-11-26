function minSetSize(arr) {
  // Count the frequency of each element
  const freqMap = new Map();
  for (const num of arr) {
    freqMap.set(num, (freqMap.get(num) || 0) + 1);
  }

  // Sort the frequencies in descending order
  const sortedFreq = Array.from(freqMap.values()).sort((a, b) => b - a);

  // Calculate the minimum size of the set
  let totalRemoved = 0;
  let count = 0;
  for (const freq of sortedFreq) {
    totalRemoved += freq;
    count++;
    if (totalRemoved >= arr.length / 2) {
      break;
    }
  }

  return count;
}

// Example usage:
const arr1 = [3, 3, 3, 3, 5, 5, 5, 2, 2, 7];
const arr2 = [7, 7, 7, 7, 7, 7];

console.log(minSetSize(arr1)); // Output: 2
console.log(minSetSize(arr2)); // Output: 1
