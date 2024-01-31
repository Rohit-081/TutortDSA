/*  A callback is a function passed as an argument to another function.
   This technique allows a function to call another function.
   A callback function can run after another function has finished.

      function myDisplayer(some) {
         document.getElementById("demo").innerHTML = some;
      }

      function myCalculator(num1, num2, myCallback) {
         let sum = num1 + num2;
         myCallback(sum);
      }

      myCalculator(5, 5, myDisplayer); */

/* const posts = [
    { title: 'Post One', body: 'This is post one' },
    { title: 'Post Two', body: 'This is post two' }
];

function getPosts() {
    setTimeout(() => {
        let output = '';
        posts.forEach((post, index) => {
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000);
}

function createPost(post, callback) {
    setTimeout(() => {
        posts.push(post);
        callback();
    }, 2000);
}



createPost({ title: 'Post Three', body: 'This is post Three' }, getPosts) */

const userLeft = false;
const userWatchingCatMeme = false;

function watchTut(callback, errorCallback) {
  if (userLeft) {
    errorCallback({
      name: "User Left",
      message: ":(",
    });
  } else if (userWatchingCatMeme) {
    errorCallback({
      name: "User W C M",
      message: "WebDev < C",
    });
  } else {
    callback("Thumbs up and Subscribe");
  }
}

watchTut(
  (message) => {
    console.log("Success: " + message);
  },
  (error) => {
    console.log(error.name + " " + error.message);
  }
);
