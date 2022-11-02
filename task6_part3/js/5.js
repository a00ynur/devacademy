let numbers = [1,2,3,4,5,6,7,8,9,10];
let sum = 0;
for (let n = 0; n < numbers.length; n++) {
   if (numbers[n] % 2 != 0) {
    sum = sum + numbers[n];
   }
}
console.log(sum);
