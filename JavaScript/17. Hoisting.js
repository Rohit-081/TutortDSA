/* JavaScript Hoisting refers to the process whereby the interpreter appears to move the declaration of functions, variables or classes to the top of their scope, prior to execution of the code. */

getName();
console.log(x);

var x = 10;
function getName() {
  console.log("Namaste Javascript");
}

// arrow function

gerName2;

var gerName2 = () => {
  console.log("Namaste Javascript");
};
