const input = "aaabbbcccaabbc";
const output = "a3b3c3a2b2c1";

let calculateCount = (str) => {
  let result = "";
  let start = str[0];
  let count = 0; // a is initial
  for (let i = 0; i <= str.length; i++) {
    if (start !== str[i]) {
      result = result + start + count;
      start = str[i];
      count = 1;
    } else {
      count++;
    }
  }
  return console.log(result);
};

calculateCount(input);