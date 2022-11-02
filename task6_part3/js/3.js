let numbers = [1,2,3,4,5,6,7,8,9,10];
let minimum = numbers[0];
let index = 0;
for (let n = 0; n < numbers.length; n++){
    if (numbers[n] < minimum ) {
        minimum = numbers[n];
        index = n;    
    }
}
console.log(index);