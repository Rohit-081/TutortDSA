/* A Pure Function is a function (a block of code) that always returns the same result if the same arguments are passed. It does not depend on any state or data change during a program’s execution. Rather, it only depends on its input arguments.

   Also a pure function does not produce any observable side effects such as network requests or data mutation etc.
   Let’s see the below JavaScript Function: */

function calculateGST(productPrice) {
  return productPrice * 0.05;
}
