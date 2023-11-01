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