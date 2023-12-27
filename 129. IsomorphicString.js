var isIsomorphic = function (s, t) {
  if (s.length !== t.length) {
    return false; // Check if the lengths are equal
  }
  let charsMap = {};
  let seenChars = new Set();

  for (let i = 0; i < s.length; i++) {
    const charS = s[i];
    const charT = t[i];
    if (charsMap[charS]) {
      // If charS is already in the map
      if (charsMap[charS] !== charT) {
        return false; // Conflict, not isomorphic
      }
    } else {
      // If charS is not in the map
      if (seenChars.has(charT)) {
        return false;
      }
      charsMap[charS] = charT;
      seenChars.add(charT);
    }
  }
  return true;
};
