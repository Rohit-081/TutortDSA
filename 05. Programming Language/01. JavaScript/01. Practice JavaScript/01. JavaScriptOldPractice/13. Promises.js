let p = new Promise((resolve, reject) => {
  let a = 1 + 1;
  if (a === 2) {
    resolve("Success");
  } else {
    reject("Failed");
  }
});

p.then((message) => {
  console.log("This is in then " + message);
}).catch((message) => {
  console.log("This is in catch" + message);
});

const posts = [
  { title: "Post One", body: "This is post one" },
  { title: "Post Two", body: "This is post two" },
];

function getPosts() {
  setTimeout(() => {
    let output = "";
    posts.forEach((post, index) => {
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

function createPost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);
      const error = false;
      if (!error) {
        resolve();
      } else {
        reject("Error: Something went wrong ");
      }
    }, 2000);
  });
}

createPost({ title: "Post Three", body: "This is post Three" })
  .then(getPosts)
  .catch((err) => console.log(err));

// ASYNC | AWAIT
/*  async function init() {
    await createPost({ title: 'Post Three', body: 'This is post three' });
    getPosts();
} 
init();
 */
// ASYNC | AWAIT With Fetch
/* async function fetchUsers() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    console.log(data);
}

fetchUsers(); */

// Promise.all
/* const promise1 = Promise.resolve("Hello World");
const promise2 = 10;
const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 2000, 'Good Bye');
});
const promise4 = fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json());

Promise.all([promise1, promise2, promise3, promise4]).then(values => console.log(values)); */

const value = 2;

const promise = new Promise((resolve, reject) => {
  const random = Math.floor(Math.random * 3);
  resolve("Hello World");
  reject("Error");
});
console.log(promise);
promise.then((data) => console.log(data)).catch((err) => console.log(err));
