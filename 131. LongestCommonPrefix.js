var longestCommonPrefix = function (strs) {
  if (strs.length === 0) {
    return "";
  }

  if (strs.length === 1) {
    return strs[0];
  }

  let newElement = strs[0];
  let newArr = [];

  for (let i = 1; i < strs.length; i++) {
    for (let j = 0; j <= strs[i].length; j++) {
      if (newElement.startsWith(strs[i].slice(0, j))) {
        newArr[i - 1] = strs[i].slice(0, j);
      } else {
        break;
      }
    }
  }
  if (newArr.length > 1) {
    return longestCommonPrefix(newArr);
  } else {
    return newArr[0] || "";
  }
};
