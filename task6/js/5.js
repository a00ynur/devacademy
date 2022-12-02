// let number1, number2;
// let A = prompt("Enter the first number: ");
// let B = prompt("Enter the second number: ");
// let C = prompt("Enter the third number: ");

// let discriminant = B*B - 4*A*C;

// if (discriminant > 0) {
//     number1 = (-B + Math.sqrt(discriminant)) / (2*A);
//     number2 = (-B - Math.sqrt(discriminant)) / (2*A);

//     console.log(`The numbers of quadratic equation are ${number1} and ${number2}`);
// }

// else if (discriminant == 0) {
//     number1 = number2 = -B / (2*A);
    
//     console.log(`The numbers of quadratic equation are ${number1} and ${number2}`);
// }

//with function
const A = +prompt('Enter the first number:');
const B = +prompt('Enter the second number:');
const C = +prompt('Enter the third number:');
let discr = (A,B,C) =>{
        let D = B*B - 4*A*C;
        console.log(D);
    if(D<0){
        alert("the equation has no real roots.")
        } else {
            number1= (-B + Math.sqrt(D))/2*A;
            number2= (-B - Math.sqrt(D))/2*A;
            console.log(number1);
            console.log(number2);
            }
        }
discr(A,B,C);
