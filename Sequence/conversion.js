"use strict"
//Given 1ft = 12inch
let feet;
let inch = 1/12;
feet = inch *42
console.log("42 inches= "+feet +" feet");



//1 acre = 43560 sq. feet
//1 sq. meter =10.763 sq. feet
const sqFeet=1/10.763; "Sq. meter";
let areaOfOnePlotInSqft = 60*40;
let sqFeetToAcre = 1/43560;
 let areaOfOneplotInSqmtrs = areaOfOnePlotInSqft *sqFeet;
 console.log("Area of one plot(60ft * 40ft) in Square meter: "+areaOfOneplotInSqmtrs);
 let totalAreaInAcre = 25 *areaOfOnePlotInSqft *sqFeetToAcre;
 console.log ("Area of twenty five such plot(60ft * 40ft) in acres:  " +totalAreaInAcre); 