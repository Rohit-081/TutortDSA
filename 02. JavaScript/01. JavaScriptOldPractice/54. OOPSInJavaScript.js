// JavaScript
// OOPS
// Object - collection of properties and methods

const user = {
  username: "rohit",
  loginCount: 8,
  signedIn: true,

  getUserDetails: function () {
    console.log("Got user details from database.");
    console.log(this);
  },
};

console.log(user.username);
console.log(user.getUserDetails());

function Pen(name, color, price) {
  this.name = name;
  this.color = color;
  this.price = price;
}

const pen1 = new Pen("Marker", "Blue", "$3");
console.log(pen1);
