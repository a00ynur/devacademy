// let A = prompt("Enter the first number: ");
// let B = prompt("Enter the second number: ");
// if (B < A) {
//     let sum=0;
//     for (let n = B; n < A; n++) {
//         if (n%7==0) {
//             sum = sum + n;
//    }
//   }
// console.log(sum);
// }
// else{
//     console.log("B must be less than A");
// }

// with function 
let A = +prompt('Enter the first number: ');
let B = +prompt('Enter the second number: ');
let divisor = (A,B) =>{
    let temp;        
    if(A>B){
        temp=A;
        A=B;
        B=temp;
        }
    for(n = B; n < A; n++){
        if(n%7 === 0){
            console.log(n);
                }
            }
        }
console.log(divisor(A,B));