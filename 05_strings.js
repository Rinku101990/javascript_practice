const name = "rinku";
const repoCount = 50;

// OutDated Standard
console.log(name + repoCount);
// Using BackTicks
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

//String Decleration
const gameNames = "RInku"; // One way string decleration
const gameName = new String("Rinku-vs"); // Other way string decleration

console.log(gameName);
console.log(gameName.__proto__);

//console.log(gameName.length);
//console.log(gameName.toUpperCase());
//console.log(gameName.charAt(2)); // check charector position
//console.log(gameName.indexOf("n"));

const newString = gameName.substring(0, 4);
console.log(newString);

const anotherString = gameName.slice(-5, 4); // reverse string

console.log(anotherString);

const newStringOne = "  Rinku  ";
console.log(newStringOne);
console.log(newString.trim());

const url = "https://rinku.com/rinku%20vishwakarma";

console.log(url.replace("%20", "-"));

console.log(url.includes("love"));

console.log(gameName.split("-"));
