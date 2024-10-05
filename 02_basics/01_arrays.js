// Array

const myArray = [1, 2, 3, 4, 5];
// console.log(myArray[1]);

const myHeros = ["shaktiman", "naagraj", "gangadhar"];
// console.log(myHeros[1]);

const myArray2 = new Array(1, 2, 3);
// console.log(myArray2[0]);

// Array Methods

// myArray.push(6);
// myArray.pop();
// console.log(myArray);

// unshift
// myArray.unshift(9);
// myArray.shift();

// includes

// console.log(myArray.includes(9));
// console.log(myArray.indexOf(4));

// Join

// const newArray = myArray.join();
// console.log(myArray);
// console.log(newArray);

// slice, splice
console.log("A ", myArray);

const myNewArray = myArray.slice(1, 3);

console.log(myNewArray);

console.log("B ", myArray);

const myArray3 = myArray.splice(1, 3);

console.log("C ", myArray3);
console.log(myArray3);
