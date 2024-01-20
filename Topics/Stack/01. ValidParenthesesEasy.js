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
};
