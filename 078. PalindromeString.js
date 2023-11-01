function isPalin(s, l, r) {
  if (l >= r) return true;
  if (s[l] != s[r]) return false;
  return isPalin(s, l + 1, r - 1);
}

console.log(isPalin("dabad", 0, 4));
console.log(isPalin("abac", 0, 3));
