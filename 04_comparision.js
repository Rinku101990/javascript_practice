console.log("2" > 1);
console.log("02" > 1);

// Comparision not allowed to two different datatype

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);
// Alway avoid this type of conversion
console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

//strict check

console.log("2" == 2);
console.log("2" === 2);
