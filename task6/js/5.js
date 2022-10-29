let number1, number2;
let A = prompt("Enter the first number: ");
let B = prompt("Enter the second number: ");
let C = prompt("Enter the third number: ");

let discriminant = B*B - 4*A*C;

if (discriminant > 0) {
    number1 = (-B + Math.sqrt(discriminant)) / (2*A);
    number2 = (-B - Math.sqrt(discriminant)) / (2*A);

    console.log(`The numbers of quadratic equation are ${number1} and ${number2}`);
}

else if (discriminant == 0) {
    number1 = number2 = -B / (2*A);
    
    console.log(`The numbers of quadratic equation are ${number1} and ${number2}`);
}