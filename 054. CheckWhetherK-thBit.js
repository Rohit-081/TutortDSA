const n = 4;
const k = 2;

function checkKthBit(n, k) {
  for (let i = 0; i < k; i++) {
    n = n >> 1;
  }
  console.log(n);
  if ((n & 1) === 1) {
    return console.log(true);
  } else {
    return console.log(false);
  }
}

checkKthBit(n, k);