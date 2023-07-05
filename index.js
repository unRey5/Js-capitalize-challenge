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

let t = Math.floor(Date.now() / 1000);
console.log(t);

//getting today's date using object literals

let d;
let e = new Date();

d = `${e.getFullYear()}-${e.getMonth() + 1}-${e.getDate()}`;

console.log(d);

//arrays and objects

const numbers = [5, 5, 23, 45, 5, 56];

console.log(numbers);

const fruits = ['oranges', 'mangoes', 'avocado', 'pear'];

console.log(fruits);

let o;
o = fruits[1];

o = fruits.length;

console.log(o);


