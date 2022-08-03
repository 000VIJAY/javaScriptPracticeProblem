let num =10;
let number;
let i =1;
while(i<=num)
{
    number = Math.pow(2,i);
    if (number <= 256)
    {
        console.log("2"+"^"+i +" = "+number);
    }
    i++
}