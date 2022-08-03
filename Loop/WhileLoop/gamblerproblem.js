let money =100 ;
let gambleWinTimes = 0;
let gambleLooseTimes =0;
let i =1;
while( (money > i || money > 200) && (money < i || money < 200))
{
    
    let gamble = Math.floor(Math.random()*10) %2;
    console.log(gamble)
    if (gamble === 0)
    {
        money++
        gambleWinTimes += (gamble+1);
        console.log("Gambler is win this time");
        console.log("Money: " +money);
    }
    else
    {
        money--
        console.log ("Gamber is loose this time");
        gambleLooseTimes += gamble;
        console.log("Money: " +money);
    }
    
}
console.log("Money: " +money);
console.log("Total win Times: "+gambleWinTimes);
console.log("Total Loose Time: " +gambleLooseTimes);