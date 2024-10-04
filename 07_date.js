// Dates

let myDate = new Date();
console.log(myDate); //
console.log(myDate.toString()); //
console.log(myDate.toDateString()); //
console.log(myDate.toLocaleString()); //
console.log(typeof myDate); // Date is object

let myCreatedDate = new Date(2024, 0, 23);
console.log(myCreatedDate.toDateString());

let myCreatedDate1 = new Date(2024, 0, 23, 5, 3);
console.log(myCreatedDate1.toLocaleString());

let myCreatedDate2 = new Date("2024-01-14");
console.log(myCreatedDate2.toLocaleString());

// Miliseconds
let myTimeStamp = Date.now();
console.log(myTimeStamp);
console.log(myCreatedDate2.getTime());
console.log(Math.floor(Date.now() / 1000));

//
let newDate = new Date();
console.log(newDate.getMonth());
console.log(newDate.getDay());

//
newDate.toLocaleString("default", { weekday: "long" });
