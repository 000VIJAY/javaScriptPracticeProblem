const d="25/04";
const DaysInMonth=[31,28,31,30,31,30,31,31,30,31,30,31];
let check=d.split('/');
if( check[0]<=DaysInMonth[check[1]-1] )
{
    if(check[1]== 3 && check[0]>=20 || check[1] > 3 && check[1] < 6 && check[0] > 0 || check[1] == 6 &&check[0] <= 20) 
    {
       console.log("true");
    }
    else
    {
       console.log("false")
    }
}
else
{
    console.log("Wrong input");
}       return false;
