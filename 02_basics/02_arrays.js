const marvelHeros = ["thor", "Ironmab", "spiderman"];
const dcHeros = ["superman", "flash", "batman"];

// push

// marvelHeros.push(dcHeros);

// console.log(marvelHeros);
// console.log(marvelHeros[3][1]);

// cocat

const allHeros = marvelHeros.concat(dcHeros);

// console.log(allHeros);

// spread

const allSpreadHero = [...marvelHeros, ...dcHeros];
// console.log(allSpreadHero);

const anotherAllArray = [1, 2, 3, [4, 5, 6], 7, 8, [9, 3, [4, 5]]];

const anotherRealAllArray = anotherAllArray.flat(Infinity);
// console.log(anotherRealAllArray);

// isArray

console.log(Array.isArray("Rinku")); //false
console.log(Array.from("Rinku"));
console.log(Array.from({ name: "Rinku" })); // intersting

let score1 = 100;
let score2 = 200;
let score3 = 300;

// Check isArray, from, of Array learn this
console.log(Array.of(score1, score2, score3));
