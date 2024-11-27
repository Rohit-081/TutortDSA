/* Design patterns are one of the easiest and quickest ways to create clean manageable code whether you are starting from scratch or refactoring existing code. One of the easiest to implement design patterns is the Null Object Pattern. This pattern is all about handling the null keyword in a way that removes all of those nasty if (object == null) checks from your code. It also makes handling default values for null objects a breeze. */

class User {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }

  hasAccess() {
    return this.name === "Bob";
  }
}

const users = [new User(1, "Bob"), new User(2, "John")];

function getUser(id) {
  return users.find((user) => user.id === id);
}

function printUser(id) {
  const user = getUser(id);

  let name = "Guest";
  if (user != null && user.name != null) name = user.name;
  console.log("Hello " + name);

  if (user != null && user.hasAccess != null && user.hasAccess()) {
    console.log("You have access");
  } else {
    console.log("You are not allowed here");
  }
}
