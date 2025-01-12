const n1 = 7;
const n2 = 15;

function getGray(n) {
  n = n ^ (n >> 1);
  return console.log(n);
}

getGray(n1);
getGray(n2);
getGray(10);