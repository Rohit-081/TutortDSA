let s = "GeeksForGeeks";
let x = "For";
let t = "GeeksForGeeks";
let y = "Fr";

function strstr(s, x) {
  let n = s.length;
  let m = x.length;
  let i = 0;
  let j = 0;
  //Edge cases
  if (m == 0) {
    return console.log(0);
  }

  for (i = 0; i < n; i++) {
    if (i + m > n) {
      return console.log(-1);
    }
    for (j = 0; j < m; j++) {
      if (s[i + j] == x[j]) {
        if (j == m - 1) {
          return console.log(i);
        }
      } else {
        break;
      }
    }
  }
  return console.log(-1);
}

strstr(s, x);
strstr(t, y);
