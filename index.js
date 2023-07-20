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

o = `I like ${fruits[2]}`;

fruits[1] = 'pear';

fruits.push('strawberry');

fruits.pop();

fruits.unshift('strawberry');

fruits.shift();

fruits.reverse();

o = fruits.includes('pear');

// o = fruits.slice(1, 3);

o = fruits.splice(1);

console.log(o);

fruits.push('avocado', 'pineaple', 'cocos');

console.log(fruits);
console.log(fruits);
console.log(numbers);


gg = [...fruits, ...numbers]

console.log(gg);

//array challenge

const arr = [1, 2, 3, 5];

arr.unshift(0);

arr.push(6);

arr.reverse();


console.log(arr);


const arr1 = [1, 2, 3, 4, 5];
const arr2 = [5, 6, 7, 8, 9, 10];

arr1.splice(4);
console.log(arr1);

const arr3 = [...arr1, ...arr2];


console.log(arr3);

const person = {
    name: 'Dan Odey',
    age: 30,
    isAdmin: false,
    address: {
        street: '1123 Crenshaw Ave', 
        state: 'California',
        Country: 'United States of America'
    }

};



let c;

c = person.age;

c = person['name'];

// delete person.age;

person.hasChildren = 'true';
console.log(person);

c = person.address.Country;

person.greet = function () {
    console.log(`Hello I am ${this.name}, a ${this.age} years old web developer.`);
}

person.greet();

console.log(c);

let r;

const todo = new Object();

todo.name = 'Dante';
todo.id = 'second';

r = todo;


console.log(r);

const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };

const obj3 = { ...obj1, ...obj2 };

console.log(obj3);

let h;
const todo2 = [
    {id:1, name:'Bread and tea'},
    {id:2, name:'Spaghetti'},
    {id:3, name:'Burger'},
];

h = todo2;

h = todo2[1].name;

h = Object.keys(todo2).length;

h = Object.values(todo2);

console.log(h);

//destructuring = pulling variables out of the object.

const todo3 = {
    id: 1,
    title: 'Top of the day'
}

const { title } = todo3;

console.log(title);

//object challenge

//Create an array of objects called `library`. Add 3 objects with a property of `title`, `author`, `status`. Title and author should be strings (whatever value you want) and status should be another object with the properties of `own`, `reading` and `read`. Which should all be boolean values. For all status, set `own` to `true` and `reading` and `read` to false.

let b;

const library = [
    {
        title: 'My object assignment',
        author: 'Daniel Defoe',
        status: {
            own: true,
            reading: false,
            read: false,
        },
    },
    {
        title: 'My object assignment',
        author: 'Tyron Lannister',
        status: {
            own: true,
            reading: false,
            read: false,
        },
    },
    {
        title: 'My object assignment',
        author: 'Martin Odegaard',
        status: {
            own: true,
            reading: false,
            read: false,
        },
    },
];

console.log(library);

//You finished reading all of the books. Set the `read` value for all of them to `true`. Do not edit the initial object. Set the values using dot notation.
library[0].status.read = 'True';
library[1].status.read = 'True';
library[2].status.read = 'True';


//Destructure the title from the first book and rename the variable to `firstBook`


library[0].title = 'Firstbook';


console.log(b);

//Turn the library object into a JSON string. There is a specific function that we looked at in the last section that we can use to do this.


const jts = JSON.stringify(library);

console.log(jts);

//Functions

function greeting() {
    console.log('Hello World');
}

greeting();


function addition(num1, num2) {
    console.log(num1 + num2);
}

addition(2, 2);

function registerUser(user = 'Anon') {

    // if (!user) {
    //     user = 'Anon';
    // } //back in the day you will use this where user is not set. now we use default param. -like in the register user fxn
    return user + ` you are welcome`;
}

console.log(registerUser());

//rest operator

function summ(...numbers) {
    return numbers;
}
console.log(summ(1,2,3,4,5));