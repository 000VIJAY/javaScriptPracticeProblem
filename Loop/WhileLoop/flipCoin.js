let i =1;
let head=0;
let tail = 0;
while(i<=11)
{
    let coin = Math.floor(Math.random()*10) %2;
    if(coin ==0)
    {
        console.log("coin is head ");
        head += (coin+1);
    }
    else
    {
        console.log("coin is tail");
        tail += coin;
    }
    i++
   
}
console.log("Total head time: "+head);
console.log("Total tail time: "+tail);