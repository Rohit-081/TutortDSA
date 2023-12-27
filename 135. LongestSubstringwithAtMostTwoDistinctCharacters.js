// Description
// Given a string, find the length of the longest substring T that contains at most 2 distinct characters.

// Only $39.9 for the "Twitter Comment System Project Practice" within a limited time of 7 days!

// WeChat Notes Twitter for more information（WeChat ID jiuzhangfeifei）

// Example
// Example 1
// Input: “eceba”
// Output: 3
// Explanation:
// T is "ece" which its length is 3.
// Example 2
// Input: “aaa”
// Output: 3

function lengthOfLongestSubstringTwoDistinct(s) {
  // Initialize pointers and map
  let left = 0;
  let right = 0;
  const charFreq = new Map();
  let maxLen = 0;

  // Iterate with the right pointer
  while (right < s.length) {
    // Update frequency of the character at the right pointer
    charFreq.set(s[right], (charFreq.get(s[right]) || 0) + 1);

    // While more than 2 distinct characters, move left pointer
    while (charFreq.size > 2) {
      charFreq.set(s[left], charFreq.get(s[left]) - 1);
      if (charFreq.get(s[left]) === 0) {
        charFreq.delete(s[left]);
      }
      left++;
    }

    // Update maxLen with the current substring length
    maxLen = Math.max(maxLen, right - left + 1);

    // Move right pointer to the next character
    right++;
  }

  return maxLen;
}

// Test cases
console.log(lengthOfLongestSubstringTwoDistinct("eceba")); // Output: 3
console.log(lengthOfLongestSubstringTwoDistinct("aaa")); // Output: 3
