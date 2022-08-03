let a = 20;
let b =25;
let c = 453;
let opsOne = a + b * c;
let opsTwo = c + a / b;
let opsThree =a % b + c;
let opsFour = a * b + c;
//Biggest number
if (opsOne >opsTwo && opsOne >opsThree&& opsOne >opsFour)
{
    console.log ("The biggest number after operation: "+opsOne);
}
else if (opsTwo >opsOne && opsTwo>opsThree && opsTwo >opsFour)
{
    console.log ("The biggest number after operation: "+opsTwo);
}
else if (opsThree > opsOne && opsThree >opsTwo && opsThree >opsFour)
{
    console.log ("The biggest number after operation: "+opsThree);
}
else if (opsFour>opsOne && opsFour >opsTwo && opsFour>opsThree)
{
    console.log ("The biggest number after operation: "+opsFour);
}
else 
{
    console.log("All number are equal");
}
//smallest number
if (opsOne < opsTwo && opsOne < opsThree&& opsOne < opsFour)
{
    console.log ("The smallest number after operation: "+opsOne);
}
else if (opsTwo < opsOne && opsTwo < opsThree && opsTwo < opsFour)
{
    console.log ("The smallest number after operation: "+opsTwo);
}
else if (opsThree < opsOne && opsThree < opsTwo && opsThree < opsFour)
{
    console.log ("The smallest number after operation: "+opsThree);
}
else if (opsFour < opsOne && opsFour < opsTwo && opsFour < opsThree)
{
    console.log ("The smallest number after operation: "+opsFour);
}
else 
{
    console.log("All number are equal");
}