// let A = prompt("Enter the number: ");
// for (let n = 0; n < A; n++) {
//    if (n*n < A) {
//        console.log(n);
//    }
// }

//with function
let A = +prompt('Enter the number: ');
let degree = (A) => {
    for(n = 0; n < A; n++){
        if(Math.pow(n,2) < A){
            console.log(n);
            }
        }
     }
degree(A);