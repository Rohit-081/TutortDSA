const mySet1 = new Set();

mySet1.add(1);
mySet1.add(5);
mySet1.add(5);
mySet1.add("some text");
const o = { a: 1, b: 2 };
mySet1.add(o);

console.log(mySet1.has(1));
console.log(mySet1);
console.log(mySet1.size);

for (let item of mySet1) console.log(item);
for (let item of mySet1.keys()) console.log(item);
for (let item of mySet1.values()) console.log(item);
for (let [key, value] of mySet1.entries()) console.log(key);
const myArr = Array.from(mySet1);
console.log(myArr);