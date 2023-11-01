//let arr = ["super", "superb", "sugar"];

function longPrefix(arr) {
  let newElement = arr[0];
  let newArr = [];
  for (let i = 1; i < arr.length; i++) {
    for (let j = 0; j <= arr[i].length; j++) {
      if (newElement.startsWith(arr[i].slice(0, j))) {
        newArr[i - 1] = arr[i].slice(0, j);
      } else {
        break;
      }
    }
  }
  if (newArr.length > 1) {
    longPrefix(newArr);
  } else {
    console.log(newArr[0]);
  }
}

longPrefix(arr);

//let arr = [1, 2, ["a", "b", [3, 4, ["c", "d"]]], [5, 6]];
let newArr = [];
function printArray(arr) {
  let n = arr.length;
  for (let i = 0; i < n; i++) {
    if (Array.isArray(arr[i])) {
      printArray(arr[i]);
    } else {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

console.log(printArray(arr));

var flatten = function (input) {
  const stack = [...input];
  const res = [];
  while (stack.length) {
    const next = stack.pop();
    if (Array.isArray(next)) {
      stack.push(...next);
    } else {
      res.push(next);
    }
  }
  return console.log(res.reverse());
};

const arr1 = [1, 2, ["a", "b", [3, 4, ["c", "d"]]], [5, 6]];
flatten(arr1);
