"use strict"

const name = prompt('enter your name');
let age = prompt('enter your age');
const likesProgramming = confirm('do you like programming');


console.log(name);
console.log(age);
console.log(likesProgramming);

console.log(typeof (name));
console.log(typeof (age));
console.log(typeof (likesProgramming));


const greeting = `Привіт, ${name}!`;
alert(greeting);


let numericAge = Number(age);
//console.log(typeof (numericAge));//
let nextAge = (numericAge + 1);
console.log(nextAge);


const isAdult = numericAge >= 18;
console.log(isAdult);

