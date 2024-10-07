//scope - like closure
// scope - {}

// This is block scope
// var c=300 // global level scope
// if loop
if (true) {
  let a = 10;
  const b = 20;
}

// console.log(a);
// console.log(b);

// for loop
const array = [1, 2, 3, 4, 5, 6, 7];
for (let i = 0; i < array.length; i++) {
  const element = array[i];
  //   console.log(element);
}

// closure using by DOM
// Nested scope

function one() {
  const username = "rinku";

  function two() {
    const website = "linkedin";
    console.log(username);
  }
  //   console.log(website);
  two();
}
// one();

if (true) {
  const username = "rinku";
  if (username === "rinku") {
    const website = " google.com";
    console.log(username + website);
  }
  //   console.log(website);
}
// console.log(username);

//+++++++++++++++++++++++++++ Interesting ++++++++++++
// result get 6 its valid
console.log(addOne(5));
function addOne(num) {
  return num + 1;
}

// this is not valid because you can not access before initialization
addTwo(5);
const addTwo = function (num) {
  return num + 2;
};
