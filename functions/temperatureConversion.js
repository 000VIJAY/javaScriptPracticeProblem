console.log("Enter-1,for convert °C to °F"
            +"Enter-2, for convert °F to °C")
let num = 2;
console.log("Entr the value for convert")
let degree = 32;
function myFunction()
{
    switch(num)
    {
        case 1:
            if (degree >= 0 && degree <=100)
            {
                let fh = (degree * (9 / 5)) + 32;
                console.log("°fahrenheit: "+fh);
            }
            else
            {
                console.log("Wrong input : input are more than boiling point or less than freezing point")
            }
        break;
        case 2:
            if (degree >=32 && degree <=212)
            {
                let ch = (degree - 32) * (5 / 9);
                console.log("°celsius: "+ch);
            }
            else
            {
                console.log("Wrong input : input are more than boiling point or less than freezing point")
            }
            break;
        default:
            console.log("Wrong input")   
            break;
    }
}
let val = myFunction();