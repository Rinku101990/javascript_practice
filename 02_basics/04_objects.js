// Object

// declare object

// const tinderUser = new Object(); // Singleton Object
const tinderUser = {}; // non singleton objects

tinderUser.id = "123abc";
tinderUser.name = "Rinku";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regularUser = {
  email: "some@gmail.com",
  fullname: {
    userFullname: {
      firstname: "rinku",
      lastname: "vishwakarma",
    },
  },
};

// console.log(regularUser.fullname);
// console.log(regularUser.fullname.userFullname);
// console.log(regularUser.fullname.userFullname.firstname);

// Combined Objects

const objectOne = { 1: "a", 2: "b" };
const objectTwo = { 3: "a", 4: "b" };

// const objectThree = { objectOne, objectTwo };
// const object4 = Object.assign(objectOne, objectTwo);
// const object5 = Object.assign({}, objectOne, objectTwo); // {} act as target and remain source

// spread object
const object6 = { ...objectOne, ...objectTwo };
// console.log(object6);

const userInfo = [
  {
    id: "1",
    fname: "rinku",
  },
  {},
  {},
];

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty("isLoggedIn"));

// De-Structuring

const course = {
  courseName: "Js in Hindi",
  price: "999",
  courseInstructor: "Rinku",
};

// course.courseInstructor  // Syntax One

const { courseInstructor } = course; // Syntax two
const { courseInstructor: instructor } = course; // syntax three

// console.log(courseInstructor);
console.log(instructor);

// API - Concept
