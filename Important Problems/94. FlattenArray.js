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

const arr = [1, 2, [3, 4, [5, 6]]];
flatten(arr);

// to enable deep level flatten use recursion with reduce and concat
function flatDeep(arr, d = 1) {
  return d > 0
    ? arr.reduce(
        (acc, val) =>
          acc.concat(Array.isArray(val) ? flatDeep(val, d - 1) : val),
        []
      )
    : arr.slice();
}

flatDeep(arr, Infinity);
