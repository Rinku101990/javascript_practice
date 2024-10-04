const accountId = 123456;
let accountEmail = "rinku@gmail.com";
var accountPassword = "123456";
accountCity = "Varanasi";
let accountState;

// console.log(accountId); // const not allowed to change value

accountEmail = "rv@gmail.com";
accountPassword = "1311331";
accountCity = "Jaunpur";

console.log(accountId);

/*
prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountEmail, accountPassword, accountCity, accountState]);
