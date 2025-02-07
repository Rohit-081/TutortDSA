const n = 16;

function countSetBits(n) {
  let count = 0;
  for (let i = 1; i <= n; i++) {
    count += getCount(i);
  }
  function getCount(i) {
    let c = 0;
    while (i > 0) {
      i = i & (i - 1);
      c++;
    }
    return c;
  }
  return console.log(count);
}

countSetBits(n);