var isAnagram = function (s, t) {
  let n1 = s.length;
  let n2 = t.length;

  // If length of both strings is not same,
  // then they cannot be anagram
  if (n1 != n2) return false;

  // Sort both strings
  let str1 = s.split("").sort().join("");
  let str2 = t.split("").sort().join("");

  // Compare sorted strings
  for (let i = 0; i < n1; i++) if (str1[i] != str2[i]) return false;

  return true;
};

let s1 = "hello";
let s2 = "heloo";

let count = 0;
function isAnagram(str1, str2) {
  if (str1.length != str2.length) {
    return false;
  }

  for (let i = 0; i < str1.length; i++) {
    if (str2.includes(str1[i])) {
      count++;
      str1 = str1.slice(i--, 1);
    } else {
      return false;
    }
  }

  return true;
}

console.log(isAnagram(s1, s2));

// HW:
// - Strings Assignment
// - https://leetcode.com/problems/first-unique-character-in-a-string/
// - https://leetcode.com/problems/longest-substring-without-repeating-characters/
