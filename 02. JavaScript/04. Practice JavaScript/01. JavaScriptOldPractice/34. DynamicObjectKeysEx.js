const person = {
    name: 'john',
}
console.log(person.name);
person.age = 25;
console.log(person);

const items = {
    'featured-items':['item1','item2'],
}

console.log(items["featured-items"]);
console.log(person['name']);

let appState = 'loading';
appState = 'error';
const app = {
    [appState]:true
}

console.log(app);

const person = ['hello', 'great'];

const testPerson = person.map(function (item) {
  console.log(item);
});

const newPerson = person.map(function (item) {
  if (item === 'hello') {
    return item.toUpperCase();
  }
  return item;
});
console.log(newPerson);