function power(a, b) {
  if (b === 0) {
    return 1;
  } else if (b % 2 === 0) {
    let temp = power(a, b / 2);
    return temp * temp;
  } else {
    return a * power(a, b - 1);
  }
}

let result = power(2, 3);
console.log(result); // Output: 8
