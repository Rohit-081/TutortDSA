const n1 = 2;
const n2 = 3;

function isSparse(n) {
  if ((n & (n >> 1)) === 0) {
    return console.log(1);
  }
  return console.log(0);
}

isSparse(n1);
isSparse(n2);