// Arrow function
// this used for current context(value)
// Global Object is - window

const user = {
  username: "rinku",
  price: 999,

  welcomeMessage: function () {
    console.log(`${this.username}, welcome to website`);
    console.log(this);
  },
};
// user.welcomeMessage();
// console.log(this);

// function avvehicle() {
//   let username = "rinku";
//   console.log(this.username);
// }

// const car = function avvehicle() {
//   let username = "rinku";
//   console.log(this.username);
// };

const car = () => {
  let username = "rinku";
  console.log(this.username);
};

// car();
// When you used { } then used return - explicitally

// const addTwo = (num1, num2) => {
//   return num1 + num2;
// };

// implecitly - not need to used {}
const addTwo = (num1, num2) => num1 + num2;

// console.log(addTwo(3, 5));
