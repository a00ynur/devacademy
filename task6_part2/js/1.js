// let A = prompt("Enter the number: ");
// for (let n = 0; n < 1000; n++) {
//    if (n%A == 0) {
//        console.log(n);
//    }   
// }

//with function 

let A = +prompt('Enter the number: ');
let divided = (A) =>{
    if(A===0){
        alert('You cant divide by zero');
        } 
        else{
            for(n=1; n<1000; n++){
            if(n%A === 0){
                console.log(n);
                }
            }
            }
        }
divided(A);
