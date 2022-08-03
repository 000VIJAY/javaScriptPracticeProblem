let check=37;
console.log(check);
if(prime(check))
{
    if(prime(palnidrome(check)))                   //checks if the palindrome of the prime number is also a prime number
    {
        console.log("Palindrome of the prime number is a prime itself");
    }
    else{
        console.log("Palindrome of the prime number is not prime");
    }
}
else
{
    console.log("Not a prime number");
}


function palnidrome(check)                
{
	let temp=check;              
	let rev=0;                   
	while(temp>0)
	{
		let rem=temp % 10;
		rev=rev * 10 + rem;
		temp=Math.floor(temp/10);
    }
    return rev;
}


function prime(num)             //function to check number is prime or not
{
    let numOne=0;
    for(let i=2;i<=(num/2);i++)
    {
        if(num%i==0)
        {
            numOne++;
            break;
        }
    }
    if(numOne!=0)
    {
        return false;
    }
    else
    {
        return true;
    }
}