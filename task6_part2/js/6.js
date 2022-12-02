// let number_1 = prompt("Please the enter number");
// let number_2 = prompt("Please the enter number");
// let reminder = 0;
// while (number_1 % number_2>0) {
    
//     reminder = number_1%number_2;
//     number_1 = number_2;
//     number_2 = reminder;
    
// }
// if (number_1 % number_2==0) {
//     console.log(number_2);
// }

//with function
const A = +prompt('Please the enter number: ');
const B = +prompt('Please the enter number: ');
const reminder = (A, B) => {
let a = Math.abs(A);
let b = Math.abs(B);
while (a && b && a !== b) {
    if(a > b){
        [a, b] = [a - b, b];
    }
    else{
        [a, b] = [a, b - a];
    };
};
return a || b;
};
console.log(reminder(A, B));


