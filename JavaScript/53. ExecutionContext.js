// Everything in Javascript happens inside an Execution Context.
// JavaScript is a synchronous single-threaded language.
// Call stack maintains the order of execution of execution contexts.

var n = 2;
function square(num) {
  var ans = num * num;
  return ans;
}

var square2 = square(n);
var square4 = square(4);
