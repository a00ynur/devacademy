let A = prompt("Enter the first number: ");
let B = prompt("Enter the second number: ");
[A, B] = [B, A];
console.log(`The number of a after swapping: ${A}`);
console.log(`The number of b after swapping: ${B}`);