const arr11 = [1, 28, 37, 49, 58, 69, 70];
const arr21 = [28, 56, 58, 70, 90, 3];

//Problem Statement -  Two sorted arrays are given and find out union. Output: [1,28,37,49,56,58,69,70,90];

// Create a new empty Array.
// Iterate over the two array one by one.
// Check that item present in the new array or not.
// If the item is present left them but if not push that item into new Array.

// Does Not produce sort output.
function unionTwoArray(x, y) {
  if (!Array.isArray(x) || !Array.isArray(y)) {
    return console.log("Please enter valid array");
  }
  let arr = [];
  for (let i = 0; i < x.length; i++) {
    if (!arr.includes(x[i])) {
      arr.push(x[i]);
    }
  }
  for (let j = 0; j < y.length; j++) {
    if (!arr.includes(y[j])) {
      arr.push(y[j]);
    }
  }
  return console.log(arr);
}

unionTwoArray(arr11, arr21);
