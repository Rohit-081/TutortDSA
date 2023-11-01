//let arr = ["super", "superb", "sugar"];

function longPrefix(arr) {
  let newElement = arr[0];
  let newArr = [];
  for (let i = 1; i < arr.length; i++) {
    for (let j = 0; j <= arr[i].length; j++) {
      if (newElement.startsWith(arr[i].slice(0, j))) {
        newArr[i - 1] = arr[i].slice(0, j);
      } else {
        break;
      }
    }
  }
  if (newArr.length > 1) {
    longPrefix(newArr);
  } else {
    console.log(newArr[0]);
  }
}

longPrefix(arr);

//let arr = [1, 2, ["a", "b", [3, 4, ["c", "d"]]], [5, 6]];
let newArr = [];
function printArray(arr) {
  let n = arr.length;
  for (let i = 0; i < n; i++) {
    if (Array.isArray(arr[i])) {
      printArray(arr[i]);
    } else {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

console.log(printArray(arr));

var flatten = function (input) {
  const stack = [...input];
  const res = [];
  while (stack.length) {
    const next = stack.pop();
    if (Array.isArray(next)) {
      stack.push(...next);
    } else {
      res.push(next);
    }
  }
  return console.log(res.reverse());
};
function test() {
  for (let i = 0; i < 2; i++) {
    setTimeout(() => {
      console.log(i);
    }, 0);
  }
}
test();

function ab() {
  var a = 10;
  return function abc() {
    a = 11;
    console.log(a);
  };
}

ab();

function clockDegree(str) {
  let splitValue = str.split(":");
  return Math.abs(splitValue[0] * 30 - splitValue[1] * 6);
}

clockDegree("9:15");
clockDegree("4:15");
clockDegree("00:01");
clockDegree("03:15");

function checkDuplicateCharacter(str) {
  const splitedValues = str.split("");
  const result = [];
  const duplicateresult = [];

  if (splitedValues.length === 0) {
    return console.log(duplicateresult);
  }

  for (let i = 0; i < splitedValues.length; i++) {
    if (result.indexOf(splitedValues[i]) === -1) {
      result.push(splitedValues[i]);
    } else {
      if (duplicateresult.indexOf(splitedValues[i]) === -1) {
        duplicateresult.push(splitedValues[i]);
      }
    }
  }
  return console.log(duplicateresult);
}

checkDuplicateCharacter("siddharth");
checkDuplicateCharacter("rohit");
checkDuplicateCharacter("Parallelllll");
checkDuplicateCharacter("");

// const arr1 = [1, 2, ["a", "b", [3, 4, ["c", "d"]]], [5, 6]];
// flatten(arr1);

// 	arr=[1,2,2,2,2,5,3,5,7,3,6,7]

// Case:1 Replace All duplicate items with single occurence.
// Case:2 Tell me the frequency of duplicate items.

// Case:1 Replace All duplicate items with single occurence.
// Pseudo Code:
// 1.Given an array of length n.
// 2.Initaily initialize a variable which stores the element of the array only one at a time and compare with the remaining elements.
// 3.If we find the same element occur more than one time than replace all the element with occurance one time.
// 4.Print the array.

// Case:2 Tell me the frequency of duplicate items.
// 1.Given an array of length n.
// 2.Initaily initialize a variable which stores the element of the array only one at a time and compare with the remaining elements.
// 3.When we compare the element we can start a count variable which can store the incremental value of occurance.
// 4.Print the no. of occurance of each element.

// ***********************************************
// function sum(a,b){
// 	var sum = a + b;
// 	console.log(sum);
// }

// var a = 10;
// var b = 11;

// sum(a,b);

// var sum = (a,b) => {
// 	var sum = a + b;
// 	console.log(sum);
// }

// var a = 10;
// var b = 11;
// sum(a,b);

// () => {
// 	var a = 1;
// 	console.log(typeof a)
// ()
// }

// 	function sum(a,b,c){
// 		this.a = a;
// 		this.b = b;
// 		this.c = c;
// 	}

// ************************************************************************
// // Pseudo Code

// const arr1 = [13, 4, 2, 5];
// const arr2 = [5,1,6,7,8];

// Step 1: Create a for loop for arr1 and i will iterate the no. so the present iterating no. that i will check it is present in the arr2 or not.

// ^[a-zA-Z-._0-9]*\@[a-zA-Z.]*$
// ^((\+|0{0,2})(91)?)?[ -]?[6789]\d{9}

// console.log(0.1+0.2 == 0.3)
// console.log(0.1+0.5 == 0.6)

// var arrowFunc = () => (({}))
// var arrowFunc1 = () => {return {};}
// var arrowFunc2 = () => {}
// var arrowFunc3 = () => ({})

// Whis one fails ????
// class Tag {
//  static calculator (total){
//     console.log('aaaaa')
// return total * .05;
// }
// }
// const square = new Tag();
// console.log(square.calculator(60))

// O/P :::::
// ????

// var myObject = {
//     foo: "bar",
//     func: function() {
//         var self = this;
//         console.log("outer func:  this.foo = " + this.foo);
//         console.log("outer func:  self.foo = " + self.foo);
//         (function() {
//             console.log("inner func:  this.foo = " + this.foo);
//             console.log("inner func:  self.foo = " + self.foo);
//         }());
//     }
// };
// myObject.func();

// var Output = (function(x){
//   delete x;
//   return x;
// })(0);

// console.log(Output);

// function foo1()
// {
//   return {
//       bar: "hello"
//   };
// }

// function foo2()
// {
//   return
//   {
//       bar: "hello"
//   };

// }

// console.log(foo1());
// console.log(foo2());

// for (var i = 0; i < 5; i++) {
//     var btn = document.createElement('button');
//     btn.appendChild(document.createTextNode('Button ' + i));
//     btn.addEventListener('click', function(){console.log(i)});
//     document.body.appendChild(btn);
//   }

// var hero = {
//     _name: 'John Doe',
//     getSecretIdentity: function (){
//         return this._name;
//     }
// };

// var stoleSecretIdentity = hero.getSecretIdentity;
// console.log(stoleSecretIdentity());
// console.log(hero.getSecretIdentity());

// class Tag {
//  static calculator (total){
//     console.log('aaaaa')
// return total * .05;
// }
// }
// const square = new Tag();
// console.log(square.calculator(60))

// O/P :::::
// ????

// var arrowFunc = () => (({}))
// var arrowFunc1 = () => {return {};}
// var arrowFunc2 = () => {}
// var arrowFunc3 = () => ({})

// Whis one fails ????
function sum(a) {
  return function (b) {
    return a + b;
  };
}

import "./styles.css";

const arr = [true, false, undefined, null, "a", 1, 0, "0", undefined];

function remValue() {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == false) {
      arr.slice(i);
    } else if (arr[i] == undefined) {
      arr.slice(i);
    } else if (arr[i] == null) {
      arr.slice(i);
    }
  }
  return console.log(arr);
}

remValue();

const test = {
  test1: null,
  test2: "somestring",
  test3: 3,
};

const element = <h1>Hello, world</h1>;
ReactDOM.render(element, document.getElementById("root"));

useEffect(() => {
  API.subscribe();
  return function cleanup() {
    API.unsubscribe();
  };
});

// The top level directory structure will be as follows:

// assets - global static assets such as images, svgs, company logo, etc.
// components - global shared/reusable components, such as layout (wrappers, navigation), form components, buttons
// services - JavaScript modules
// store - Global Redux store
// utils - Utilities, helpers, constants, and the like
// views - Can also be called "pages", the majority of the app would be contained here

// "https://api.github.com/users/"

// function t(i){
// 	console.log("i" * 2)
// }

// t(1); // 0
// t(0); // 1

// We are switching 1 into 0 and 0 into 1.
// We have to use arithmetic operators.

// console.log(a);
// Var a =10;

// var x = 21;
// var data = function () {
//     console.log(x);
//     var x = 20;
// };
// data ();

// const data={id:1,key:'aa'}
// data.id =2;
// console.log(data.id)

// Const arr=[1,2,3]
// arr.push(4);

// Var arr=[1,1,2,2,4,2,1,3,5,4,2]
// function removeDuplicate(arr){
// 	Var newarr = [];
// 	for(let i = 0; i< arr.length; i++){
// 	if(newarr.includes(arr[i])){

// }else{
// 	newarr.push(arr[i]);
// }
// }
// 	Return newark;
// }

// Var data={xx:1,yy:2}
// Function objKeys(data){

// }

// Var data1={xx:1,yy:2}
// Var data2={xx:1,yy:2}

// Var arr=[1,2,3,4,5,6]
// Var arr1 =arr.map(data=>{

// });

// == ===

// Var str = ‘hheeellloooohhh’
// Function countOccurance(str){
// 	Var arr = str.split();
// Var obj ={};
// for(let i = 0; i<arr.length; i++){
// 	if(obj.hasOwnProperty(arr[i])){
// 	obj[arr[i]] += 1;
// }else{
// 	Obj[arr[i]] = 1;
// }
// }
// }

// <p1>
// 	<c1 s1={s1}></c1>
// 	<c2 s2={s2}></c2>
// 	<c3 s3={s3}></c3>
// </p1>
