var isPalindrome = function (s) {
  let first, second, sliced;
  const trimed = s
    .toLowerCase()
    .replace(/[^a-zA-Z0-9]/g, "")
    .replace(/\s+/g, "");

  if (trimed.length === 0 || trimed.length === 1) {
    return true;
  }

  first = trimed.slice(0, trimed.length / 2);

  if (trimed.length % 2 == 0) {
    sliced = trimed.slice(trimed.length / 2, trimed.length);
  } else {
    sliced = trimed.slice(trimed.length / 2 + 1, trimed.length);
  }
  second = sliced.split("").reverse().join("");
  return first === second ? true : false;
};

console.log(isPalindrome("A man, a plan, a canal: Panama"));
