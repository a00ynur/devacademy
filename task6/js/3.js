// let A = prompt("Enter the first nuumber: ");
// let B = prompt("Enter the second number: ");
// let C = prompt("Enter the third number: ");
// let X = (C-B)/A;
// console.log("(C-B)/A="+X);

//with function
const A = +prompt('Enter the first number:');
const B = +prompt('Enter the second number:');
const C = +prompt('Enter the third number:');

let numbers = (A,B,C) => {
    if(A===0||B===0||C===0){
    alert('You can not write zero');
    } 
    else {
            let X = (C-B)/A;
            console.log(X);
                }
            }
numbers(A,B,C);