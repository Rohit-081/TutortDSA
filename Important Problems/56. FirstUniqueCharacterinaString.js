/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  //        for(let i=0;i<s.length;i++){

  //     let firstIndex = s.indexOf(s[i])
  //     let lastIndex = s.lastIndexOf(s[i])

  // if(firstIndex === lastIndex){
  //       return i
  //     }
  //     }

  // return -1

  // Create a map to store the count of each character
  const charCount = new Map();

  // Iterate through the string to count characters
  for (const char of s) {
    charCount.set(char, (charCount.get(char) || 0) + 1);
  }

  // Iterate through the string to find the first non-repeating character
  for (let i = 0; i < s.length; i++) {
    if (charCount.get(s[i]) === 1) {
      return i;
    }
  }

  // If no non-repeating character is found, return -1
  return -1;
};
