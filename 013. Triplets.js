let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 15];
let target = 18;

arr.sort(function (a, b) {
  return a - b;
});

let left = 1;
let right = arr.length - 1;
let first = arr[0];

for (let i = 0; i < arr.length - 1; i++) {
  first = arr[i];
  left = i + 1;
  right = arr.length - 1;
  while (left < right) {
    if (first + arr[left] + arr[right] > target) {
      right--;
    } else if (first + arr[left] + arr[right] < target) {
      left++;
    } else {
      console.log(first, arr[left], arr[right]);
      left++;
      right--;
    }
  }
}
