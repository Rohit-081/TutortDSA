var original = [true, true, undefined, false, null];

var copy1 = original.slice(0);
var copy2 = [...original];
console.log(copy1, copy2);

var deepArray = [["freeCodeCamp"]];
var shallowCopy = deepArray.slice(0);

shallowCopy[0].push("is great");
console.log(deepArray[0], shallowCopy[0]);

var deepCopy = JSON.parse(JSON.stringify(deepArray));
console.log(deepCopy);

let person = {
  firstName: "John",
  lastName: "Doe",
  address: {
    street: "North 1st street",
    city: "San Jose",
    state: "CA",
    country: "USA",
  },
};

let copiedPerson = Object.assign({}, person);

copiedPerson.firstName = "Jane"; // disconnected

copiedPerson.address.street = "Amphitheatre Parkway"; // connected
copiedPerson.address.city = "Mountain View"; // connected

console.log(copiedPerson);

let copyPerson = JSON.parse(JSON.stringify(person));
console.log(copyPerson);

var obj1 = {
  Name: { Name1: "Rohit", Name2: { Name1: "Shaan", Name2: "Aarjav" } },
  Hobbies: { Hobby1: "Time Pass", Hobby2: "Gardening" },
};

var obj2 = { ...obj1 };
var obj3 = Object.assign({}, obj2);

obj2["game"] = { game1: "cricket", game2: "football" };

obj2.Name.Name2.Name2 = "Ayush";
console.log(obj2.Name.Name2.Name2);
console.log(obj1);
console.log(obj2);
console.log(obj3);