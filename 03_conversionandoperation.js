let score = "33";

// console.log(typeof score);

let valueNumber = Number(score);
// console.log(typeof valueNumber); // Nan - not a number
// console.log(valueNumber);

// "33" => 33
// "33abd" => NaN
// true=> 1; false=>0

let isloggedIn = "Rinku";

let booleanIsLoggedIn = Boolean(isloggedIn);
// console.log(booleanIsLoggedIn);

// 1=> true; 0=>false
// "" > false
// "Rinku"=>true

let someNumber = 33;

let stringNumber = String(someNumber);
// console.log(stringNumber);
// console.log(typeof stringNumber);

// **************** Operation ******************

let value = 3;
let negValue = -value;

console.log(negValue); // -3

// console.log(2 + 2);
// console.log(2 - 2);
// console.log(2 * 2);
// console.log(2 ** 2);
// console.log(2 / 2);
// console.log(2 % 2);

let str1 = "hello";
let str2 = " world";

let str3 = str1 + str2;

console.log(str3);

console.log("1" + 2); // 12
console.log(1 + "2"); // 12
console.log("1" + "2"); // 12
console.log("1" + 2 + 2); // 122
console.log(1 + 2 + "2"); // 32
console.log(3 + ((4 * 5) % 3)); // It is good way to write code with paranthesis

console.log(+true); // 1
// console.log(true+); // unexpeced expression

console.log(+"");

let num1, num2, num3;
num1 = num2 = num3 = 2 + 2;

let gameCounter = 2;
++gameCounter;
console.log(gameCounter);
