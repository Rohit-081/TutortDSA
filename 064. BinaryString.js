const a = "10101";
const n = 5;

function binarySubstring(n, a) {
  let count = 0;
  let sum;
  for (let i = 0; i < n; i++) {
    if (a[i] === "1") {
      count = count + 1;
    }
  }
  let l = count;
  sum = (l * (l - 1)) / 2;
  return console.log(sum);
}

binarySubstring(n, a);