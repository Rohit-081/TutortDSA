//1. Find max of 3 elements
function finMaximum(a, b, c) {
  if (a >= b && a >= c) {
    return a;
  } else if (b >= a && b >= c) {
    return b;
  } else {
    return c;
  }
}

console.log(finMaximum(10, 5, 8));

//2. Find min of 3 elements
// function findMinimum(a, b, c) {
// 	  if (a =< b && a =< c) {
// 		return a;
// 	  } else if (b =< a && b =< c) {
// 		return b;
// 	  } else {
// 		return c;
// 	  }
// 	}

// console.log(findMinimum(10, 5, 8));

//3. Find mid elements out of 3 elements.
function findMidElement(a, b, c) {
  if ((a > b && a < c) || (a < b && a > c)) {
    return a;
  } else if ((b > a && b < c) || (b < a && b > c)) {
    return b;
  } else {
    return c;
  }
}

console.log(findMidElement(10, 5, 8));

//4. Print below series for n=5

// 1

// 1 2

// 1 2 3

// 1 2 3 4

// 1 2 3 4 5

function printN(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += j + " ";
    }
    console.log(row);
  }
}

console.log(printN(5));

// 5. Print below series for n=5

// 1 2 3 4 5

// 1 2 3 4

// 1 2 3

// 1 2

// 1

function printN(n) {
  for (let i = n; i >= 1; i--) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += j + " ";
    }
    console.log(row);
  }
}

console.log(printN(5));

// 6. Return all odd elements from array

// [1,5,6,4,3,2,8] should return => [1,5,3]

let newArr = [1, 5, 6, 4, 3, 2, 8].filter((i) => i % 2 != 0);

console.log(newArr);

// 7. Find sum of array elements

// [1,2,6,3,5] should return => 17

let sum = [1, 2, 6, 3, 5].reduce((acc, val) => acc + val, 0);

console.log(sum);

// 8. find first even number in array if there is no even return -1

// [1,2,6,3,5] => should return 2

// [1,7,3,5] => should return -1

// [1,7,4,8,5] => should return 4

function firstEven(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      return arr[i];
    }
  }
  return -1;
}
