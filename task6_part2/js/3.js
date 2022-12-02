// let A = prompt("Enter the A: ");
// let divisor = 0;
// for (let n = 1; n <= A/2; n++){
//      if (A% n == 0) {
//          divisor = n;
//      }
// }
// console.log(divisor);

//with function
let A = +prompt('Enter the A:');
let divisor = (A) => {
    let divisor;
    for (let n = 1; n <= A/2; n++){
    if (A%n === 0) {
        divisor = n;    
    }
}
return divisor;
}
console.log(divisor(A));