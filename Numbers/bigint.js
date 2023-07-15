// The largest number that JavaScript can reliably represent with the Number primitive is 253-1, the number beyond that is used with BigInt object
// "n" - JavaScript number is accurate up to 15 digits, so using more than 15 digits is recommended with appending "n" to the end of value of calling "BigInt"
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

//  Minimum and maximum safe integer
let num23 = Number.MAX_SAFE_INTEGER;        //  Returns the maximum safe integer in JavaScript
console.log(num23);         //  Returns the maximum safe integer 9007199254740991

let num24 = Number.MIN_SAFE_INTEGER;        //  Returns the minimum safe integer in JavaScript
console.log(num24);         //  Returns the minmum safe integer -9007199254740991

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
