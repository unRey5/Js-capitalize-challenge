//capitalize challenge

const myString = 'developer';

let myNewString;

myNewString = myString.slice(0,1).toUpperCase() + myString.slice(1);

console.log(myNewString);

//number challenge

let x = Math.round(Math.random() * 100 + 1);

let y = Math.round(Math.random() * 50 + 1);

let sum = `${x} + ${y} = ${x + y}`; 

let difference = `${x} - ${y} = ${x - y}`;

let product = `${x} * ${y} = ${x * y}`;

let quotient = `${x} / ${y} = ${x / y}`;

let remainder = `${x} % ${y} = ${x % y}`;

console.log(remainder);

console.log(quotient);

console.log(product);

console.log(difference);

console.log(sum);

console.log(x);

console.log(y);
