// Objects and Events
// declere variable using singleton -

//01-objects literals

//Declere Symbol
const mySym = Symbol("key1");

// object created
const jsUser = {
  name: "rinku",
  [mySym]: "mykey1",
  age: 20,
  location: "varanasi",
  email: "rinku@gmail.com",
  isLogged: false,
  lastLoggedInDays: ["Monday", "Saturday"],
};

// Access with two way
// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser[mySym]); // access symbols

// jsUser.email = "rinku@google.com";
// Object.freeze(jsUser.email);

// console.log(jsUser);

// Add Greeting
jsUser.greeting = function () {
  console.log("Hello Js User");
};

jsUser.greetingTwo = function () {
  console.log(`Hello Js User ${this.name}`);
};

console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());
