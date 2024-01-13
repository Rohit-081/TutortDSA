var isValid = function (s) {
  const stack = [];
  const bracketMap = { ")": "(", "}": "{", "]": "[" };

  for (const char of s) {
    if (bracketMap[char] === undefined) {
      // If it's an opening bracket, push onto the stack
      stack.push(char);
    } else {
      const topElement = stack.length === 0 ? "#" : stack.pop();
      if (bracketMap[char] !== topElement) {
        return false;
      }
    }
  }
  return stack.length === 0;
  //   const stack = [];
  //   const parens = "() {} []";
  //   let i = 0;
  //   while (i < s.length) {
  //     stack.push(s[i]);
  //     i++;
  //     let open = stack[stack.length - 2];
  //     let closed = stack[stack.length - 1];
  //     let potParens = open + closed;
  //     if (parens.includes(potParens)) {
  //       stack.pop();
  //       stack.pop();
  //     }
  //   }
  //   return stack.length === 0;
};
