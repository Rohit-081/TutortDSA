//1. Minimum of three numbers
function findMinimum(a, b, c) {
  if (a < b && a < c) {
    return a;
  } else if (b < a && b < c) {
    return b;
  } else {
    return c;
  }
}

console.log(findMinimum(10, 5, 8));

//2. check couple is eligible for marriage (girl age should be 18 boy should be 21) print yes or no.

function checkAge(ageBoy, ageGirl) {
  if (ageBoy >= 21 && ageGirl >= 18) {
    return "Yes";
  }
  return "No";
}

console.log(checkAge(22, 18));

//3. print tax amount if bill amount is 50000 above then tax is 10% else 5% , using ternary operator
function bill(billamount) {
  return billamount >= 50000 ? billamount * 0.1 : billamount * 0.05;
}

console.log(bill(5000));

//4. check year is leap or not

function leapYear(year) {
  if (year % 400 == 0) {
    return "Leap Year";
  } else if (year % 4 == 0 && year % 100 != 0) {
    return "Leap Year";
  }

  return "Not a Leap Year";
}

console.log(leapYear(2024));

//5. check number is odd or not, print odd or even

function OddEven(num) {
  if (num % 2 == 0) {
    return "Even";
  }
  return "Odd";
}

console.log(OddEven(11));
