// let x = prompt('Enter the x: ');
// let y = prompt('Enter the y: ');
// let r = prompt('Enter the r: ');
// let radius = r*r;
// let formul = Math.sqrt((x*x)+(y*y));
// if(radius=formul){
//         console.log('(x,y) is inside the circle')
// } else {
//         console.log('(x,y) is not inside the circle')
// }

// with function
const x = +prompt('Enter the x: ');
const y = +prompt('Enter the y: ');
const r = +prompt('Enter the r: ');
let check = (x,y,r) =>{
    let radius=r*r;
    let formul= Math.sqrt((x*x)+(y*y));
    if(radius=formul){
        console.log('(x,y) is inside the circle')
    } 
    else {
        console.log('(x,y) is not inside the circle')
       }
    }
check(x,y,r);