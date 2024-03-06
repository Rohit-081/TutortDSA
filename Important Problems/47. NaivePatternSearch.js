const txt = "aabaacaadaabaaabaa";
const pat = "aaba";

function search(pat, txt) {
  let n = txt.length;
  let m = pat.length;
  let i = 0;
  let j = 0;
  for (i = 0; i <= n - m; i++) {
    for (j = 0; j < m; j++) {
      if (txt[i + j] !== pat[j]) {
        break;
      }
    }
    if (j === m) {
      return console.log("Yes");
    }
  }
  return console.log("No");
}

search(pat, txt);