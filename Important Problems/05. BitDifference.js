const A = 20;
const B = 25;

function countBitsFlip(a, b) {
  let c = a ^ b;
  console.log(c);
  let count = 0;
  while (c > 0) {
    c = c & (c - 1);
    count++;
  }
  return console.log(count);
}

countBitsFlip(A, B);