function permute(s, l, r) {
  if (l == r) {
    console.log(s);
    return;
  }
  for (let i = l; i <= r; i++) {
    s = swapChars(s, l, i);
    permute(s, l + 1, r);
    s = swapChars(s, l, i);
  }
}

permute("abc", 0, 2);

function swapChars(s, c, b) {
  // Get string length
  let n = s.length;

  // if c is larger or equal to the length of
  // the string is effectively the remainder of
  // c divided by the length of the string
  c = c % n;

  if (c == 0) {
    // No change will happen
    return s;
  }

  let f = Math.floor(b / n);
  let r = b % n;

  // Rotate first c characters by (n % c)
  // places f times
  let p1 = rotateLeft(s.substring(0, c), ((n % c) * f) % c);

  // Rotate remaining character by
  // (n * f) places
  let p2 = rotateLeft(s.substring(c), (c * f) % (n - c));

  // Concatenate the two parts and convert the
  // resultant string formed after f full
  // iterations to a character array
  // (for final swaps)
  let a = (p1 + p2).split("");

  // Remaining swaps
  for (let i = 0; i < r; i++) {
    // Swap ith character with
    // (i + c)th character
    let temp = a[i];
    a[i] = a[(i + c) % n];
    a[(i + c) % n] = temp;
  }

  // Return final string
  return a.join("");
}

function rotateLeft(s, p) {
  // Rotating a string p times left is
  // effectively cutting the first p
  // characters and placing them at the end
  return s.substring(p) + s.substring(0, p);
}

// Driver code
// Given values
let s1 = "ABCDEFGHIJK";
let b = 1000;
let c = 3;

// get final string
let s2 = swapChars(s1, c, b);

// print final string
document.write(s2);

// This code is contributed by ab2127
