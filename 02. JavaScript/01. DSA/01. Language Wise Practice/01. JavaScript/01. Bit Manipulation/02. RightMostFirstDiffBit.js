const n1 = 11;
const n2 = 9;
const n3 = 52;
const n4 = 4;
const n5 = 9;
const n6 = 9;

function posOfRightMostDiffBit(m, o) {
  let n = m ^ o;
  let position = 1;
  if (n === 0) {
    return console.log(-1);
  }
  while (n > 0) {
    if ((n & 1) == 1) {
      break;
    }
    n = n >> 1;
    position++;
  }
  return console.log(position);
}

posOfRightMostDiffBit(n1, n2);
posOfRightMostDiffBit(n3, n4);
posOfRightMostDiffBit(n5, n6);

function posOfRightMostDiffBit(m, o) {
  let n = m ^ o; // XOR to identify differing bits

  if (n === 0) return -1; // Return -1 if numbers are identical

  // Find the position of the rightmost set bit
  return Math.log2(n & -n) + 1; // Use bit manipulation and math for efficiency
}

// Test Cases
console.log(posOfRightMostDiffBit(11, 9));  // Expected: 2
console.log(posOfRightMostDiffBit(52, 4));  // Expected: 3
console.log(posOfRightMostDiffBit(9, 9));   // Expected: -1
