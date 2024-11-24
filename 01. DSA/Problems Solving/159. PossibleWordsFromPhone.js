function keypad(a, N, i, newstr, res) {
  let keypad1 = [
    ".",
    " ",
    "abc",
    "def",
    "ghi",
    "jkl",
    "mno",
    "pqrs",
    "tuv",
    "wxyz",
  ];

  let str = a.join("");

  if (i == str.length) {
    res.push(newstr);
    return;
  }

  let currchar = str.charAt(i);
  let charval = keypad1[currchar];
  console.log(charval);
  for (let j = 0; j < charval.length; j++) {
    keypad(a, N, i + 1, newstr + charval.charAt(j), res);
  }
}
function possibleWords(a, N) {
  //your code here
  let res = [];
  keypad(a, N, 0, "", res);
  return res;
}

console.log(possibleWords([2, 3, 4], 3));
