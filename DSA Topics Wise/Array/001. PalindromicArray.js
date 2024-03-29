//Given a Integer array A[] of n elements. Your task is to complete the function PalinArray.
//Which will return 1 if all the elements of the Array are palindrome otherwise it will return 0.

// Input:
// 5
// 111 222 333 444 555

// Output:
// 1

// Explanation:
// A[0] = 111 //which is a palindrome number.
// A[1] = 222 //which is a palindrome number.
// A[2] = 333 //which is a palindrome number.
// A[3] = 444 //which is a palindrome number.
// A[4] = 555 //which is a palindrome number.
// As all numbers are palindrome so This will return 1.
function PalinArray(arr, n) {
  for (let i = 0; i < n; i++) {
    let x = arr[i].toString();
    for (let j = 0; j < x.length; j++) {
      if (x[j] != x[x.length - j - 1] && j < x.length - j - 1) {
        return 0;
        break;
      }
    }
  }
  return 1;
}

console.log(PalinArray([121, 131, 20], 3));

function isPalindrome(num) {
  const strNum = num.toString();
  return (strNum = strNum.split("").reverse.join(""));
}

function PalinArray(arr, n) {
  for (let i = 0; i < n; i++) {
    if (!isPalindrome(arr[i])) {
      return 0;
    }
  }
  return 1;
}
