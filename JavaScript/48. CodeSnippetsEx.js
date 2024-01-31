//1.
var person = {
  age: 50,
};

delete person.age;
console.log(person);

// 2.
let a = false;
let b = 0;
console.log(a == b);

// 3.
for (let i = 0; i < 5; i++) {}
//console.log(i);

// 4.
let x = 5;
let y = "6";
console.log(x + y);

// 5.
let e = 7;
let f = 0;
let g = 15;

console.log(e && f && g);

// 6.
let ar = [1, 2, 3, 4];
console.log(typeof ar);

// 7.
console.log(1);
setTimeout(function () {
  console.log(2);
}, 1000);
setTimeout(function () {
  console.log(3);
}, 0);
console.log(4);

// 8.
function xi() {
  setTimeout(function () {
    console.log("i", i);
  }, 1000);
  var i = 1;
}
xi();

//9.
let n = "Rohit";
n = n.split("");
n[0] = "M";
n = n.join("");
console.log(n);

//10.
const arr = [1, "a", 2, "b", 3, "c"];
arr.filter((item) => {
  if (typeof item === "number") {
    return item;
  }
});

// 11.
arr
  .filter((item) => {
    if (typeof item === "number") {
      return item;
    }
  })
  .reduce((a, b) => a + b, 0);

//12.
arr.filter(Number);

// 13.
const arr1 = [false, 0, null, undefined, 1, -1, "a"];
arr.filter(Boolean);
arr.filter((item) => item);

//14.
const arr2 = [1, [2, [3, [4, [5]]]]];

arr2.flat;
arr2.flat(4);
arr2.flat(Infinity);
//15.
arr2.join();
/* Array.from(arr2.join().replaceAll(",", ""));
[...arr2.join().replaceAll(",", "")]; */

console.log("23" - "10" - 3);
console.log("23" * 3);

let no = "1" + 1;
no = no - 1;
console.log(no);

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Jonas"));
console.log(Boolean({}));
console.log(Boolean(""));
