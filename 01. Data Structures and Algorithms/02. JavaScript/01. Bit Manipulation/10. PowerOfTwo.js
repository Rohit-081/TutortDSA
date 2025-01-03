const n1 = 1;
const n2 = 16;
const n3 = 98;

function isPowerofTwo(n) {
  if (n === 0) {
    return console.log("NO");
  }
  if ((n & (n - 1)) === 0) {
    return console.log("YES");
  }
  return console.log("NO");
}

isPowerofTwo(n1);
isPowerofTwo(n2);
isPowerofTwo(n3);
isPowerofTwo(23);