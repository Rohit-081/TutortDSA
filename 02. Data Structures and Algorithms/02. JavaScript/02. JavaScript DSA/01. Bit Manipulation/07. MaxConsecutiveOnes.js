const n1 = 3;
const n2 = 222;
function maxConsecutiveOnes(n) {
  let count = 0;
  while (n > 0) {
    n = n & (n << 1);
    count++;
  }
  return console.log(count);
}
maxConsecutiveOnes(n1);
maxConsecutiveOnes(222);
