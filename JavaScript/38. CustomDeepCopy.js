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

let arr = [1, 22, 3, 4];

let obj1 = {
  name: "scotch.io",
  exec: function exec() {
    return true;
  },
};

const obj = {
  data: [
    {
      type: "articles",
      id: "1",
      attributes: {
        title: "JSON:API paints my bikeshed!",
        body: "The shortest article. Ever.",
      },
      relationships: {
        author: {
          data: { id: "42", type: "people" },
        },
      },
    },
  ],
  included: [
    {
      type: "people",
      id: "42",
      attributes: {
        name: "John",
      },
    },
  ],
};

var obj5 = {
  Name: { Name1: "Rohit", Name2: { Name1: "Shaan", Name2: "Aarjav" } },
  Hobbies: { Hobby1: "Time Pass", Hobby2: "Gardening" },
};

function isObject(obj) {
  return typeof obj === "object";
}

function customDeepCopy(obj) {
  let result = {};
  if (isObject(obj)) {
    for (let i in obj) {
      if (!isObject(i)) {
        if (obj.hasOwnProperty(i)) {
          result[i] = obj[i];
        } else {
          customDeepCopy(i);
        }
      }
    }
  }
  return result;
}

console.log(customDeepCopy(person));
console.log(customDeepCopy(arr));
console.log(customDeepCopy(obj));
console.log(customDeepCopy(obj5));