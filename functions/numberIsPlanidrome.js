let rem, numOne, num, rev = 0;  
function palindrome()
 {  
    num = 121; 
    numOne = num;  
    while (num > 0)  
    {  
    rem = num % 10;  
    rev = rev*10 + rem;  
    num = parseInt( num / 10);  
    }  
    if (rev == numOne)  
    {  
    console.log( " Palindrome Number");  
    }  
    else  
    {  
    console.log(" not a Palindrome Number");  
    }  
    }  
    let x = palindrome();