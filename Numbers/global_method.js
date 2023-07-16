
/*
In JavaScript, there are 3 global methods used to convert a variable to a number and they are ss follows:
1.  Number()            Returns a number converted from its argument              
2.  parseFloat()        parses its argument and returns a foloating point number                  
3.  parseInt()          parses its argument and returns a whole number
Note:   These are not number methods, but they are JavaScript global methods
*/


//  The Number Method   -   This method is used to convert a JavaScript variable to number
let num1 = 250;




console.log(Number(true));              //  Returns 1 sine the numeric value of 1 is true
console.log(Number(false));             //  Returns 0 since the numeric value of false is 0
console.log(Number("100"));             //  Returns 100
console.log(Number("500.43"));          //  Returns 500.43
console.log(Number("JavaScript"));      //  Returns Nan
//  Note: If a value can not be converted, NaN is returned

/*-------------------*/

//  ParseInt()      -       Parses a string and returns a whole number. Spaces are allowed, only the first number is returned
console.log(parseInt(11.65));               //  Returns 11
console.log(parseInt(500.6789));            //  Returns 500
console.log(parseInt("10 decades"));        //  Returns only 10
console.log(parseInt("World War 2"));       //  Returns NaN because it is started with string
console.log(parseInt("99.99"));             //  Returns 99
//  Note: If the number cannot be converted, Nan is returned

/*-------------------*/

//ParseFloat        -       Parses a string and returns a number. Spaces are allowed and only the firstnumber os returned
console.log(parseFloat(500));               //  Returns 500
console.log(parseFloat(500.65));            //  Returns 500.65
console.log(parseFloat("98.98"));           //  Returns 98.98
console.log(parseFloat("EcmaScript 6"));    //  Returns NaN
console.log(parseFloat("47    48     49")); //  Returns only 47 as first number of the string
//  Note: If the number is not converted, NaN is returned

/*-------------------*/











