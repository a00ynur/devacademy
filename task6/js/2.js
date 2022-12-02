// let A = prompt("Enter the first number: ");
// let B = prompt("Enter the second number: ");
// [A, B] = [B, A];
// console.log(`The number of a after swapping: ${A}`);
// console.log(`The number of b after swapping: ${B}`);

//with function
let A = +prompt('Enter the first number:');
let B = +prompt('Enter the second number:');
let numbers = (A,B) =>{
    let temp;
    temp=A;
    A=B;
    console.log(`A=${A}`);
    B= temp;
    console.log(`B=${B}`);
    }
numbers(A,B);