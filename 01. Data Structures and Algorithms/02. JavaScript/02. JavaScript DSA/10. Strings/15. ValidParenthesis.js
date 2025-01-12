// https://www.youtube.com/watch?v=HhBo1fckgBM&list=PLrClazTqVpJmY0TcHROxfaz62i31uiFzr&index=3
// https://leetcode.com/problems/valid-parentheses/

var isValid = function (s) {
  let arr = s.split("");
  console.log(arr);
  if (arr.length <= 1) return false;

  let obj = {
    "{": "}",
    "[": "]",
    "(": ")",
  };
  let keys = ["{", "[", "("];
  let stack = [];

  for (let i = 0; i < arr.length; i++) {
    const elem = arr[i];
    if (keys.includes(elem)) {
      stack.push(elem);
    } else {
      if (obj[stack.pop()] !== elem) return console.log(false);
    }
  }
  return console.log(stack.length === 0);
};

isValid("()[]{}");

function isValidProb(s) {
  const stack = [];
  const parens = "() {} []";
  let i = 0;
  while (i < s.length) {
    stack.push(s[i]);
    i++;
    let open = stack[stack.length - 2];
    let closed = stack[stack.length - 1];
    let potParens = open + closed;
    if (parens.includes(potParens)) {
      stack.pop();
      stack.pop();
    }
  }
  return stack.length === 0;
}

console.log(isValidProb("()[]{}"));
