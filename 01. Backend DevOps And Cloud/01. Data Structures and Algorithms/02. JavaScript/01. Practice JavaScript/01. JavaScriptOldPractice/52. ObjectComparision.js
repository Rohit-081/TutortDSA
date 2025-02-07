const k1 = { fruit: "🥝" };
const k2 = { fruit: "🥝" };

console.log(JSON.stringify(k1) === JSON.stringify(k2));

//console.log(_.isEqual(k1, k2));

Arr = [1, [2, 3], [4, [5, 6]]];
console.log(Arr.flat(Infinity));

const arr = [1, [2, 3], [4, [5, 6]]];

function flatDeep(arr, d = 1) {
  return d > 0
    ? arr.reduce(
        (acc, val) =>
          acc.concat(Array.isArray(val) ? flatDeep(val, d - 1) : val),
        []
      )
    : arr.slice();
}

console.log(flatDeep(arr, Infinity));

let numbers = [1, 2, 3];

let sum = numbers.reduce(function (accumulator, currentValue) {
  return accumulator + currentValue;
});
console.log(sum);

let shoppingCart = [
  {
    product: "phone",
    qty: 1,
    price: 699,
  },
  {
    product: "Screen Protector",
    qty: 1,
    price: 9.98,
  },
  {
    product: "Memory Card",
    qty: 2,
    price: 20.99,
  },
];

let total = shoppingCart.reduce(function (acc, curr) {
  return acc + curr.qty * curr.price;
}, 0);

console.log(total);

const object1 = {
  a: "somestring",
  b: 42,
  c: false,
};

console.log(Object.keys({ a: { b: "a", c: "d", e: { f: "g" } } }));
