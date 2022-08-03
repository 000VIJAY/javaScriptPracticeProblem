let number = 37;
let num = 0;
for (let i = 1; i <= number; i++)
{
    if (number % i == 0)
    {
        num++;
    }
}
    if (num == 2)
    {
        console.log("Number is : Prime number");
    }
    else
    {
        console.log("Number is : not a Prime number");
    }