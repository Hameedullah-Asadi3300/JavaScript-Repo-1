

/*  JavaScript has only one type of number, which can be written with or witout decimal.
    Numbers without a period in JavaScript can be accurate up tp 15 digits.
*/
//  Eample 

console.log(2.4);
console.log(1400);


/*
    JavaScript numbers use + arithmethic operator in both numbers and strings to concatenate
    Example:
*/
let num1 = 10;
let string1 = "20";
console.log(num1 + string1);    //  The result is 1020
//  And the commom mistake of the following operation is 3030
let x = 10;
let y = 20;
console.log("The result is: " + x + y);


/*
Math operstors in JavaScript are as follows:
+
-
*
/
% 
*/
console.log(10/5);


// + operator
let plus1 = 10;
let plus2 = 10;
console.log(plus1 + plus2);


// - operator
let minus1 = 20;
let minus2 = 15;
console.log(minus1 - minus2);


//  % operator  - This operator returns the remainder
let num2 = 30;
let num3 = 9;
console.log(num2 % num3);

//  / operator
let num4 = 500;
let num5 = 10;
console.log(num4 / num5);



/*
The largest number that JavaScript can reliably represent with the Number primitive is 253-1,
     the number beyond that is used with BigInt object
"n" - JavaScript number is accurate up to 15 digits, so using more than 15 digits is
     recommended with appending "n" to the end of value of calling "BigInt"
*/
let num17 = 1234567891011121314n;     //"n" appended to the end of the value - The value should be inside the parentisis
console.log(num17);
//Calling "BigInt" built in object in JavaScript
let num18 = BigInt(123456789101112131415);  //  BigInt is called before the value - The value should be inside the parentisis
console.log(num18);

//The typeof BigInt is "bigint" itself
let type = BigInt(123456789100200300)
console.log(typeof type);

/*------------------*/

/*BigInt is the second numeric data type of number in JavaScript
With BigInt, the total data types in JavaScript are 8:
1.  Number
2.  BigInt
3.  string
4.  Object
5.  Boolean
6.  Undefined
7.  Null
8.  Symbol
*/
//                  Aritmathic between BigInt and a number is not allowed, because type conversion lose information
//                                  let num19 = 100;    //  Number variable
//                                  let num20 = BigInt(8009001000200030004000);     //  BigInt Value
//                                  console.log(num19 + num20); //  throws TypeError


//                  BigInt Decimals - Using Decimal or point with BigInt is not allowed
//                                  let num21 = BigInt(900800.765);      //  Decimal is used with BigInt
//                                  console.log(num21);     // throws RangError

/*------------------*/

//  BigInt can be used with Hexadecimal, octal and binary notation
let num22 = 0b100000000000000000000000000000000000000000000000000011n;  //  Binary
console.log(num22); //  Returns 9007199254740995n

/*------------------*/


/*  Number.isInteger - it is used to see if a value is intger
*/
let num25 = 75;
console.log(Number.isInteger(num25));       //  Returns true since num25 is an integer

// & Number.IsSafeInteger - It returns true if a number is safe integer
let num26 = 100.1;
console.log(Number.isSafeInteger(num26));   //  Returns false since this is a decimal value

let num27 = 1002003004;
console.log(Number.isSafeInteger(num27));   // Returns true
/* Note: Safe integers are all integers from -(253 - 1) to +(253 - 1).
This is safe: 9007199254740991. This is not safe: 9007199254740992.
*/
