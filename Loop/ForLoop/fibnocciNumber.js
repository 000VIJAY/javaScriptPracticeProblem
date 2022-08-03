console.log("Write the number whose fibonacci series wants to know  ");

let num = 10;
let numOne = 0;
console.log("num : " +numOne);
let numTwo = 1;
console.log("num : "+numTwo);
let numThree;
for (let i = 2; i < num; i++)
{
    numThree = numOne + numTwo;
    numOne = numTwo;
    numTwo = numThree;
    console.log("num : " + numThree);
}