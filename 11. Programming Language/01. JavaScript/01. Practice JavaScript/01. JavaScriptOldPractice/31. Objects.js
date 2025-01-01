const myCar = new Object();

myCar.make = "Ford";
myCar.year = 1969;
myCar.model = "Mustang";
myCar.color;
console.log(myCar.hasOwnProperty("color"));

const a = Array.isArray([myCar]);
console.log(a); //true;
console.log(typeof a);
console.log(typeof myCar);
console.log(typeof [myCar]);
console.log(typeof null);

const myObj = new Object(),
  str = "myString",
  rand = Math.random(),
  obj = new Object();
const date = new Date().getTime().toString();
console.log(date);

myObj.type = "Dot syntax";
myObj["date created"] = "String with space";
myObj[str] = "String value";
myObj[rand] = "Random Number";
myObj[obj] = "Object";
myObj[""] = "Even an empty string";

console.log(myObj);

function showProps(obj, objName) {
  let result = "";
  for (let i in obj) {
    console.log(i);
    console.log(obj.hasOwnProperty(i));
    if (obj.hasOwnProperty(i)) {
      result += `${objName}.${i} = ${obj[i]}\n`;
    }
  }
  console.log(result);
}

showProps(myCar, "myCar");

function listAllProperties(o) {
  let objectToInspect = o;
  let result = [];

  while (objectToInspect !== null) {
    result = result.concat(Object.getOwnPropertyNames(objectToInspect));
    objectToInspect = Object.getPrototypeOf(objectToInspect);
  }

  return result;
}

listAllProperties(myCar);