// Immediately Invoked Function Expressions(IIFE)

function dbConnect() {
  console.log(`DB Connected`);
}
// dbConnect();

// iife used to remove global palution from code
// Named IIFE
(function dbConnectIife() {
  console.log(`DB Connected One`);
})();

// Without name iife
(() => {
  console.log(`DB Connected Two`);
})();

// Passing as argument

((name) => {
  console.log(`DB Connected Three ${name}`);
})("rinku");
