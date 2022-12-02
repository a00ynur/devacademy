// let A = prompt("Enter the first number: ");
// let B = prompt("Enter the second number: ");
// let result = A/B;
// let reminder = A%B;
// console.log(parseInt(result),parseInt(reminder));

//with function
const A = +prompt('Enter the first number:');
const B = +prompt('Enter the second number:');
let divide = (A,B) =>{
    if(B===0){
    alert('We cant divide by zero');
        } 
        else{
            let result = A/B;
            console.log(result);
            let reminder = A%B;
            console.log(reminder);
        }
        }
        divide(A,B);