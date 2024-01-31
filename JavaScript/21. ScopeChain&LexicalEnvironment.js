function a() {
  console.log(b);
}

var b = 10;
a();

function c() {
  var d = 10;
  e();
  function e() {}
}

c();
console.log(d);

var a1 = 1;
let b1 = 2;
const c1 = true;

function meTry() {
  var aa1 = 2;
  let bb2 = 3;

  {
    let cc1 = true;
    var gg1 = 2;
  }
}

meTry();