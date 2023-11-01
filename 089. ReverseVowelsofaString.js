// Given a string s, reverse only all the vowels in the string and return it.

// The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.

// Example 1:

// Input: s = "hello"
// Output: "holle"
// Example 2:

// Input: s = "leetcode"
// Output: "leotcede"

let s = "hello";

function isVowel(char) {
  let vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  return vowels.indexOf(char) !== -1;
}
function vowelString(s) {
  let sArray = s.split("");
  let start = 0;
  let end = s.length - 1;

  while (start < end) {
    if (!isVowel(sArray[start])) {
      start++;
      continue;
    }
    if (!isVowel(sArray[end])) {
      end--;
      continue;
    }
    let swap = sArray[start];
    sArray[start] = sArray[end];
    sArray[end] = swap;
    start++;
    end--;
  }
  return sArray.join("");
}

console.log(vowelString(s));
