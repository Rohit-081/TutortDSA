let arr = ["Akshay", "Aditya"];
let object = {
  name: "Akshay",
  city: "Dehradun",
  getIntro: function () {
    console.log(this.name + "from " + this.city);
  },
};

let object2 = {
  name: "Aditya",
};

// Never do this
object2.__proto__ = object;

const myObject = {
  channelName: "JsCafe",
};
console.log(myObject.channelName); //JsCafe
console.log(myObject.hasOwnProperty("channelName")); //true;

function myFunction() {
  console.log("Welcome to JsCafe");
}

myFunction.color = "red";
console.log(myFunction());
console.log(myFunction.color);
console.log(myFunction.toString());
console.log(myFunction.hasOwnProperty("color"));

function multiplyby5(num) {
  return num * 5;
}

multiplyby5.power = 2;
console.log(multiplyby5(5));
console.log(multiplyby5.power);
console.log(multiplyby5.prototype);
