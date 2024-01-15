// let p = new promise((resolve, reject) => {
//   let s = true;
//   let resolve = true;
//   let
//   if (resolve && s) {
//     console.log(success);
//   }
//   if (reject && s) {
//     console.log(reject);
//   }
// });

// p.then(res);
// console.log(res).catch(err);
// console.log(err);

// const event = require("event");

// let eventEmitter = event.emit();

// eventEmitter.on("click", function showEvent() {
//   console.log("Event call");
// });

var arr = [22, 13, 11, 22, 13, 11, 2, 5];
// output = [22,13,11]

function duplicateElements(nums) {
  let result = [];
  let Obj = {};
  for (let i = 0; i < nums.length; i++) {
    if (Obj[nums[i]] >= 1) {
      Obj[nums[i]] += 1;
    } else {
      Obj[nums[i]] = 1;
    }
  }

  for (const key in Obj) {
    if (Obj[key] > 1) {
      result.push(key);
    }
  }
  return result;
}

console.log(duplicateElements(arr));

async function n() {
  await p;
}
function x() {
  console.log("1");
  setTimeout(() => {
    console.log("2");
  }, 1000);
  Promise.resolve("3").then((res) => console.log(res));
  setImmediate(() => {
    console.log("4");
  });
  console.log("5");
}
x(); // 1 5 3 4 2
