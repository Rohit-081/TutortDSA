// 1. Call():
// It’s a predefined method in javascript.
// This method invokes a method (function) by specifying the owner object.
function sayHello() {
  return "Hello " + this.name;
}
var obj = { name: "Sandy" };
sayHello.call(obj);

// Returns "Hello Sandy"

// call() method allows an object to use the method (function) of another object.
var person = {
  age: 23,
  getAge: function () {
    return this.age;
  },
};
var person2 = { age: 54 };
person.getAge.call(person2);
// Returns 54

let name = {
  firstName: "Akshay",
  lastName: "Saini",
};

let printFullName = function (hometown, state) {
  console.log(
    this.firstName + " " + this.lastName + " from " + hometown + " , " + state
  );
};

printFullName.call(name, "Dehradun", "Uttarakhand");

let name2 = {
  firstName: "Sachin",
  lastName: "Tendulkar",
};

printFullName.call(name2, "Mumbai", "Maharashtra");

printFullName.apply(name2, ["Mumbai", "Maharashtra"]);

let printMyName = printFullName.bind(name2, "Mumbai", "Maharashtra");
console.log(printMyName);
printMyName();

var pokemon = {
  firstname: "Pika",
  lastname: "Chu ",
  getPokeName: function () {
    var fullname = this.firstname + " " + this.lastname;
    return fullname;
  },
};

var pokemonName = function () {
  console.log(this.getPokeName() + "I choose you!");
};

var logPokemon = pokemonName.bind(pokemon); // creates new object and binds pokemon. 'this' of pokemon === pokemon now

logPokemon(); // 'Pika Chu I choose you!'
