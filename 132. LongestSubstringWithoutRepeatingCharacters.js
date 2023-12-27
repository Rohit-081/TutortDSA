var lengthOfLongestSubstring = function (s) {
  // Initialize pointers and set
  let left = 0;
  let right = 0;
  const charSet = new Set();
  let maxLength = 0;

  // Iterate with the right pointer
  while (right < s.length) {
    // If the character is not in the set, add it and update maxLength
    if (!charSet.has(s[right])) {
      charSet.add(s[right]);
      maxLength = Math.max(maxLength, right - left + 1);
      right++;
    } else {
      // If the character is in the set, remove the character at the left pointer
      charSet.delete(s[left]);
      left++;
    }
  }

  return maxLength;
};
