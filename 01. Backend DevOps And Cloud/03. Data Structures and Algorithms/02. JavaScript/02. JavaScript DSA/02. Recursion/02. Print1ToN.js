function printTillN(n) {
  if (n == 0) {
    return;
  } else {
    printTillN(n - 1);
    console.log(n);
  }
}

printTillN(5);

function oneToN(n) {
  if (n == 0) {
    return n;
  } else {
    oneToN(--n);
    console.log(n + 1);
  }
}
oneToN(5);

class Solution {
  constructor() {
    this.s = "";
  }

  printN(n) {
    if (n === 0) return;
    this.printN(n - 1);
    this.s += `${n} `;
  }

  printTillN(n) {
    this.printN(n);
    console.log(this.s);
  }
}
