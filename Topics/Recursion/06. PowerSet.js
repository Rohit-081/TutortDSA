function powerSet(s, i, curr) {
  if (i == s.length) {
    console.log(curr);
    return;
  }
  powerSet(s, i + 1, curr + s[i]);
  powerSet(s, i + 1, curr);
}

powerSet("abcd", 0, " ");
