// let arr = [10, -2, 30, 45, 56, 78, -100];
// let n = 7;
function maxminElement(arr, n) {
  let min = arr[0];
  let max = arr[0];
  for (let i = 0; i < n; i++) {
    if (arr[i] > max) {
      max = arr[i];
    } else if (arr[i] < min) {
      min = arr[i];
    }
  }
  return [max, min];
}
console.log(maxminElement(arr, n));

// let arr = [10, 20, 20, 4];
// let n = 4;
// let arr1 = [-2, 1, 10, 15];
// let arr2 = [2, 13, 15, 17, 9, 5, 12, 8, 16, 19, 18, 19];
// let n2 = 12;
// let arr3 = [4, 2];
// let n3 = 2;
function find2Max(arr, n) {
  if (n < 2) {
    return "Invalid Input";
  }
  let firstMax = Number.MIN_VALUE;
  let secondMax = Number.MIN_VALUE;
  for (let i = 0; i < n; i++) {
    if (arr[i] > firstMax) {
      secondMax = firstMax;
      firstMax = arr[i];
    } else if (arr[i] > secondMax) {
      secondMax = arr[i];
    }
  }
  return [firstMax, secondMax];
}

console.log(find2Max(arr, n));
console.log(find2Max(arr1, n));
console.log(find2Max(arr2, n2));
console.log(find2Max(arr3, n3));

let arr = [1, 2, 3, 4, 5, 6, 7, 8];
let n = 8;
function reverse(arr, n) {
  for (let i = 0; i < n / 2; i++) {
    let swap = arr[i];
    arr[i] = arr[n - i - 1];
    arr[n - i - 1] = swap;
  }
  return arr;
}

console.log(reverse(arr, n));

let s = "hello";
function isVowel(char) {
  let vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  return vowels.indexOf(char) !== -1;
}

var reverseVowels = function (s) {
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
};
console.log(reverseVowels(s));

console.log(s[1]);
