const n1 = 18;
const n2 = 20;
const n3 = 3365;
const n4 = 15;
const n5 = 0;

function getFirstSetBit(n) {
  let position = 1;
  if (n == 0) {
    return console.log(0);
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

getFirstSetBit(n1);
getFirstSetBit(n2);
getFirstSetBit(n3);
getFirstSetBit(n4);
getFirstSetBit(n5);