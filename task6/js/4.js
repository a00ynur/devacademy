// let A=prompt("Enter the first nuumber: ");
// let B=prompt("Enter the second nuumber: ");
// if (A>B) {
//     console.log(parseInt(A)+parseInt(B));
// }

// else if (A===B) {
//     console.log(A*B);
// }

// else{
//     console.log(A-B);
// }

// with function

const A = +prompt('Enter the first number:');
const B = +prompt('Enter the second number');
let numbers = (A,B) =>{
    if(A>B){
    console.log(A+B);
    } 
    else if(A<B){
        console.log(A-B);
    } 
    else {
        console.log(A*B);
            }
        }
numbers(A,B);