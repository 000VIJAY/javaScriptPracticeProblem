let num=35;
console.log("Prime factor of given number ");
for (let i = 2; i <= (num / 2); i++)            //factors are only from 2 to the half of the number
{
    while (num % i == 0)              
    {
        console.log(i + " ");
        num = num / i;                          //remove that particular factor by updating the number value
    }
}
if(num>1)
{
    console.log(num);
}
else
{
    console.log("Error");
}