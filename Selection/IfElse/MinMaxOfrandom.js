let ranOne = Math.floor(Math.random() * 899)+100;
let ranTwo = Math.floor(Math.random() * 899)+100;
let ranThree = Math.floor(Math.random() * 899)+100;;
let ranFour = Math.floor(Math.random() * 899)+100;
let ranFive = Math.floor(Math.random() * 899)+100;
if (ranOne > ranTwo && ranOne > ranThree && ranOne > ranFour && ranOne > ranFive)
{
    console.log("Biggest Three Digit Number is: " +ranOne);
}
else if (ranTwo > ranOne && ranTwo > ranThree && ranTwo > ranFour && ranTwo > ranFive)
{
    console.log("Biggest Three Digit Number is: " +ranTwo);
}
else if (ranThree > ranOne && ranThree > ranTwo && ranThree > ranFour && ranThree > ranFive)
{
    console.log("Biggest Three Digit Number is: " +ranThree);
}
else if (ranFour > ranOne && ranFour > ranTwo && ranFour > ranThree && ranFour > ranFive)
{
    console.log("Biggest Three Digit Number is: " +ranFour);
}
else if (ranFive > ranOne && ranFive > ranTwo && ranFive > ranThree && ranFive > ranFour)
{
    console.log("Biggest Three Digit Number is: " +ranFive);
}
else
{
    console.log("All number are equal")
}
//for Smallest three Digit number
if (ranOne < ranTwo && ranOne < ranThree && ranOne < ranFour && ranOne < ranFive)
{
    console.log("Smallest Three Digit Number is: " +ranOne);
}
else if (ranTwo < ranOne && ranTwo < ranThree && ranTwo < ranFour && ranTwo < ranFive)
{
    console.log("Smallest Three Digit Number is: " +ranTwo);
}
else if (ranThree < ranOne && ranThree < ranTwo && ranThree < ranFour && ranThree < ranFive)
{
    console.log("Smallest Three Digit Number is: " +ranThree);
}
else if (ranFour < ranOne && ranFour < ranTwo && ranFour < ranThree && ranFour < ranFive)
{
    console.log("Smallest Three Digit Number is: " +ranFour);
}
else if (ranFive < ranOne && ranFive < ranTwo && ranFive < ranThree && ranFive < ranFour)
{
    console.log("Smallest Three Digit Number is: " +ranFive);
}
else 
{
    console.log("All number are eqal")
}