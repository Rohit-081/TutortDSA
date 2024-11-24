const n1 = 4;
const n2 = 15;
const n3 = 0;

function grayToBinary(n) {
  let ans = 0;
  while (n !== 0) {
    ans = ans ^ n;
    n = n >> 1;
  }
  return console.log(ans);
}

grayToBinary(n1);
grayToBinary(n2);
grayToBinary(n3);