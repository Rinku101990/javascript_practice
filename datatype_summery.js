// Primitive - 7 Category - Call By Value
/*
1-String
2-Number
3-Boolean
4-null
5-undefined
6-Symbol
7-BigInt
*/

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outSideTemp = null;

let userEmail;

// Symbol
const id = Symbol("123");
const anotherId = Symbol("123");

console.log(id === anotherId); // result - false

// BigInt

const bigNumber = 21312312421412412n;

// Non-Primitive - Reference Type  - return type - function object
/*
1-Array
2-Objects
3-Functions
*/
// Array
const heros = ["shaktiman", "naagraj", "doga"];

//Object- Key Value Pair
let myObject = {
  name: "Rinku",
  age: 22,
};
// function
const myFunction = function () {
  console.log("Hello World!");
};

// For Advance Javascript - Master in Javascript
// Objects and Web Events

// Question - Javascript is statatically typed or dynamically typed ?

// ++++++++++++++++++++++++++++++++++++++++ Memory Allocation and release +++++++++++++++

// Stack Memory (Primitive Datatype)
// Heap Memory(Non-Primitive Datatype)

let myFunctionName = "rinkuvishwakarma";

let anotherFunctionName = myFunctionName;

anotherFunctionName = "vishwakarma";

console.log(anotherFunctionName);

let userOne = {
  email: "user@google.com",
  upi: "user@ybl",
};

let userTwo = userOne;

userTwo.email = "user2@google.com";

console.log(userOne.email);
console.log(userTwo.email);
