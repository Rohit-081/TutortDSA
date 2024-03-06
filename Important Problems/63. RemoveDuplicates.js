const removeDuplicate = (str) => {
  const newStr = new Set();
  for (let i = 0; i < str.length; i++) {
    newStr.add(str[i]);
  }
  return [...newStr].join("");
};
console.log(removeDuplicate("ReelNRoad"));
