// function

function sayMyName() {
  console.log("R");
  console.log("I");
  console.log("N");
  console.log("K");
  console.log("U");
}

// sayMyName();

// Add Two Numbers

// Here number1 and number2 are parameters and 3 and 5 is argument

// function addTwoNumbers(number1, number2) {
//   console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2) {
  let result = number1 + number2;
  return result;
}

const result = addTwoNumbers(3, 5);

// console.log("Result: ", result);

function loginUSerMessage(username) {
  if (username === undefined) {
    console.log("Please enter a username");
    return;
  }
  return `${username} just logged in`;
}

// console.log(loginUSerMessage("Rinku"));

// If can not assigned any argument in function then return undefined

// console.log(loginUSerMessage()); // when not assigned argument

// shoping cart style -
function calculateCartPrice(num1) {
  return num1;
}

// console.log(calculateCartPrice(100)); // when passing single argument

// by spread operator
function calculateCartMultiPrice(...num1) {
  return num1;
}
// console.log(calculateCartMultiPrice(100, 2003, 500)); // when passing multi arguments

const user = {
  username: "rinku",
  prices: 199,
};

function handleObject(anyObject) {
  console.log(
    `Username is ${anyObject.username} and price is ${anyObject.prices}`
  );
}

// handleObject(user);

const myNewArray = [200, 300, 500, 600, 800];

function returnSecondValue(getArray) {
  return getArray[1];
}

console.log(returnSecondValue(myNewArray));
