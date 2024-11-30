/**
 * @param {string} s
 * @return {number}
 */
var minAddToMakeValid = function (s) {
  if (s.length === 0) {
    return 0;
  }

  let stack = []; // Change from stack = 0 to stack = []
  for (let i = 0; i < s.length; i++) {
    if (s.charAt(i) == "(") {
      stack.push("("); // Push the character onto the stack
    }

    if (s.charAt(i) == ")") {
      if (stack.length > 0 && stack[stack.length - 1] == "(") {
        stack.pop(); // Pop the opening parenthesis from the stack
      } else {
        stack.push(")"); // Push the closing parenthesis onto the stack
      }
    }
  }
  return stack.length;
};
