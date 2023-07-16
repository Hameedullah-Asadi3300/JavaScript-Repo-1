/*The number method in JavaScript are folows:

    Method                                       Desciption
toString()                               Returns a number as string
toExponential()                          Returns a number written exponential notation
toFixed()                                Return  a number written with a number of decimal
toPrecision()                            Returns a number with a specified length
ValueOf()                                Returns a number as a number
*/

/*--------------------*/

//toString()
let num1 = 85;
console.log(num1.toString());

let num2 = 100 + 47;
num2.toString();
console.log(typeof num2);

/*--------------------*/

//toExponential
let num3 = 9.656;
console.log(num3.toExponential());
console.log(num3.toExponential(6));     //  The optional parameter defines number of digits behind the decimal point
console.log(num3.toExponential(7));     //  prints 9.6560000e+0

/*--------------------*/

//toFixed()     -       returns a string, with the number written with a specified number of decimals
let num4 = 10.97;
console.log(num4.toFixed());            //  prints 11           |  Returns no number of decimal
console.log(num4.toFixed(4));           //  prints 10.9700      |  Returns 4 number of decimals
console.log(num4.toFixed(6));           //  prints 10.970000    |  Returns 6 number of decimals
//Note: It is perfect to use with money

/*--------------------*/

//toPercision()     -   Is used to format a number to a specific precision or lenght
let num5 = 15.86;
console.log(num5.toPrecision());    //    The original number 15.86 is written because no parametere has passed to it
console.log(num5.toPrecision(6));   //    The whole lenght of the number will be 6. Returns 15.8600
console.log(num5.toPrecision(8));   //    The whole lenght of the number will be 8. Returns 15.860000
 
/*--------------------*/

//valueOf   -   Returns a number as number
let num6 = 1565;
console.log(num6.valueOf());    //  Returns the original number

/*--------------------*/











