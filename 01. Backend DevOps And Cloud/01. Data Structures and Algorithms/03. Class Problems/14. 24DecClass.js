function isPalindrome(s) {}

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

function isPalindrome(s) {
  let l = 0;
  let r = s.length - 1;
  while (l <= r) {
    if (s[l] !== s[r]) {
      return false;
    } else {
      l++;
      r--;
    }
  }
  return true;
}

console.log(isPalindrome("katak"));
console.log(isPalindrome("abca"));

var firstUniqChar = function (s) {
  let str = s.split("");
  for (let i = 0; i < str.length; i++) {
    let st = str[i];
    str.splice(i, 1);
    if (st.indexOf(str) !== -1) {
      return i;
    }
    i--;
  }
  return -1;
};

console.log(firstUniqChar("leetcode"));

// console.log("leetcode".split(''));
// let str1 = "leetcode".split('').splice(1,1);
// console.log(str1);

let arr = ["flower", "flow", "flight"];
function longPrefix(arr) {
  let newElement = arr[0];
  let newArr = [];
  for (let i = 1; i < arr.length; i++) {
    for (let j = 0; j <= arr[i].length; j++) {
      if (newElement.startsWith(arr[i].slice(0, j))) {
        newArr[i - 1] = arr[i].slice(0, j);
      } else {
        break;
      }
    }
  }
  if (newArr.length > 1) {
    longPrefix(newArr);
  } else {
    console.log(newArr[0]);
  }
}

longPrefix(arr);
