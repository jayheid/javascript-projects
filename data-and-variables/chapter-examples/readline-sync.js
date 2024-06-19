const input = require('readline-sync');

/*
let info = input.question("Question text... ")

let name = input.question("Enter your Name: ")


console.log("Hello " + name);
*/

/*
let firstName = input.question("Enter your first name: ")
let lastName = input.question("Enter you Last Name: ")

console.log("First Name: " + firstName);
console.log("Last Name: " + lastName);
console.log("Last, First: ", lastName + ", " + firstName);
*/

/*
let num1 = Number(input.question("Enter a number: "));
let num2 = Number(input.question("Enter another number: "));

console.log(num1 + num2);
*/ 

let info = input.question("Please enter your age: ");
//The user enters 25.

console.log(typeof info); // readline-sync stores input as string by default