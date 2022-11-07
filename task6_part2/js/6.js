let number_1 = prompt("Please the enter number");
let number_2 = prompt("Please the enter number");
let reminder = 0;
while (number_1 % number_2>0) {
    
    reminder = number_1%number_2;
    number_1 = number_2;
    number_2 = reminder;
    
}
if (number_1 % number_2==0) {
    console.log(number_2);
}