var x = 1;
a();
b();
console.log(x);
function a() {
  var x = 10;
  console.log(x);
}

function b() {
  var x = 100;
  console.log(x);
}

let y = 1;
c();
d();
console.log(y);
function c() {
  let y = 10;
  console.log(y);
}

function d() {
  var y = 100;
  console.log(y);
}