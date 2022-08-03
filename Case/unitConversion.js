//1feet = 12inch
//1 Meter = 3.28084ft
console.log("Enter The number as per conversion requirement");
console.log("Enter=1,for convert feet to inch. Enter =2,for convertinch to feet" +
            "Enter=3,for convert Feet to meter. Enter=4,for convert meter to feet");
let choice = 4;
console.log("Enter value for convert");
let val = 2
switch(choice)
{
    case 1:
            converted = val *12;
            console.log(val+" feet "+" = " +converted+ " inch");
       break;
    case 2:
            converted = val /12;
            console.log(val+" inch "+" = " +converted+ " feet");
        break;
    case 3:
            converted = val/3.28084;
            console.log(val+" feet "+" = " +converted+ " Meter");
        break;
    case 4:
            converted = val * 3.28084;
            console.log(val+" Meter "+" = " +converted+ " feet");
        break;
    default:
            console.log("wrong input")
        break;
}