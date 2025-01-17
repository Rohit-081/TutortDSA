// What is callback functions in JavaScript
// The functions are first class functions and A function can be passed as an argument to other functions.
// It gives the asynchronous behaviour in synchronous javascript.
/* setTimeout(function() {
    console.log("timer");
}, 5000);

function x(y) {
    console.log("x");
    y();
}

x(function y() {
    console.log("y");
});


function attachEventListeners() {
    let count = 0;
    document.getElementById("clickMe").addEventListener("click", function xyz() { // callback function
        console.log("Button Clicked!", ++count);
    });
}


attachEventListeners(); */

// Garbage Collection & removeEventListeners
// EventListener are heavy and use alot of memory so thats why we remove it.

/* document.querySelector("#grandparent").addEventListener(
  "click",
  () => {
    console.log("Grandparent Clicked");
  },
  false
);
document.querySelector("#parent").addEventListener(
  "click",
  () => {
    console.log("Parent Clicked");
  },
  true
);
document.querySelector("#child").addEventListener(
  "click",
  () => {
    console.log("Child Clicked");
  },
  false
);
 */

document.querySelector("#category").addEventListener("click", (e) => {
  console.log(e.target.id);
  window.location.href = "/" + e.target.id;
});
