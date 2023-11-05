function fizzbuzz(n) {
  let newArr = [];
  for (let i = 0; i < n; i++) {
    if ((i + 1) % 3 == 0 && (i + 1) % 5 == 0) {
      newArr.push("FizzBuzz");
    } else if ((i + 1) % 3 == 0 && (i + 1) % 5 != 0) {
      newArr.push("Fizz");
    } else if ((i + 1) % 3 != 0 && (i + 1) % 5 == 0) {
      newArr.push("Buzz");
    } else {
      newArr.push((i + 1).toString());
    }
  }
  return newArr;
}

console.log(fizzbuzz(15));
