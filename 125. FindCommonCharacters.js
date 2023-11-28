// 1002. Find Common Characters
// Easy
// 3.4K
// 276
// Companies
// Given a string array words, return an array of all characters that show up in all strings within the words (including duplicates). You may return the answer in any order.

// Example 1:

// Input: words = ["bella","label","roller"]
// Output: ["e","l","l"]
// Example 2:

// Input: words = ["cool","lock","cook"]
// Output: ["c","o"]

var commonChars = function (words) {
  const result = [];
  const charCount = {};
  for (const char of words[0]) {
    charCount[char] = (charCount[char] || 0) + 1;
  }
  for (let i = 1; i < words.length; i++) {
    let currentCount = {};
    for (const char of words[i]) {
      currentCount[char] = (currentCount[char] || 0) + 1;
    }
    for (const char in charCount) {
      charCount[char] = Math.min(charCount[char] || 0, currentCount[char] || 0);
    }
  }

  for (const char in charCount) {
    result.push(...Array(charCount[char]).fill(char));
  }
  return result;
};
