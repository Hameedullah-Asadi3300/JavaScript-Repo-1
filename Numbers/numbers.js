/*
JavaScript has only one type of number. It can be written with or without decimals.
JavaScript numbers are always stored as double precision floating point numbers, following the international IEEE 754 Standard.
This format stores 64 bits 
*/
//With Decimals
let num1 = 10.1;
console.log(num1);
//Without Decimals   
let num2 = 10;
console.log(num2);
/*------------------*/

//Extra large = The extra large numbers are written with exponent or secintefic notation "e"
let num3 = 111e5;   //  The number used after "e" is actually number of zeroes which use to the power concept
console.log(num3);  //  Prints 11100000
//Calculation: 111 * (10**5) = 11100000 | 111 multiplied by 10, to the power of 5 equals to 11100000
/*------------------*/

//Extra small - ncncnc
let num4 = 5255e-2; //  After the notation, using the operator "-" is requirred
console.log(num4);  //  Prints 52.55

/*------------------*/

//Floating point - floating points number is a positive or negative whole number with a decimal point as follows:
//The maximum number of decimal is 17
let num5 = 500.45;      //  This is a floating number
console.log(num5);      


// Floating precision - Precision of the floating point is not 100% accurate.
let x = 0.2 + 0.1;
console.log(x); //Returns 0.30000000000000004

/*------------------*/

// + operator and string - Using + for adding a number with string results a string. It is actually colled concatenation 
let string = "My lucky numberis ";
let num6 = 10;
let result = string + num6;
console.log(result);    //  Prints My lucky numberis 10

/*------------------*/

let num7 = 10;
let num8 = 35;
console.log("The whole number is: " + num7 + num8); //  This example does not add 10 to 35, but prints | The whole number is: 1035

/*------------------*/

//Numeric string - The JavaScript strings can contain numeric values as well
let numericValue = "My favorite number is 255.";      //  JavaScript tries to convert strings to numbers in all numeric operations
console.log(numericValue);  //  prints My favorite number is 255.

/*------------------*/

//NaN - NaN is a keyword indicates that a number is not a legal number.
let num9 = 100 / "grpes";
console.log(num9);  //prints NaN since we are dividing 100 by non numeric/string value

//But if the string is numeric, will result a number
let num10 = 500 / "50";
console.log(num10); //  prints 50

/*------------------*/

//isNaN - This is a global function in JavaScript used to findout if a value is not a number. It returns true and false.
let num11 = 100;
console.log(isNaN(num11));          //  returns false

let stringValue = "JavaScript";
console.log(isNaN(stringValue));    //  returns true because the value assigned to the variable is not a number

/*------------------*/

//  NaN itself is a number and typeof NaN returns number

typeof NaN;         //Returns number

/*------------------*/

//Infinity - The infinity will return if a number a number is calculated outside the largest number as follows:
let LargestNumber = 10;
while (LargestNumber != Infinity)           //  Infinity is keyword in JavaScript
{
    LargestNumber = LargestNumber * LargestNumber;
    }
console.log(LargestNumber); //returns infinity

//Division by 0 also returns infinity
let division = 100 / 0;
console.log(division);
// type of infinity is number
console.log(typeof Infinity);   //returns infinity

/*------------------*/

//  Hexa - If a number is proceeded by "0x" it is interpreted/converted to hexadecimal
let hexa = 0xff;    //  hexa value
console.log(hexa);  //  prints 255
//  Another example
console.log(0x6a);

/*------------------*/

//.tostring()
//JavaScript by default displays numbers as base 10, but we can use .tostring() to change the base. 
let num12 = 57;
console.log(num12.toString(2)); //  prints binary equavelincy 111001

/*------------------*/

//Equality ==
let num13 = 10;         //  Numeric value
let num14 = "10";       //  Numeric value in string
console.log(num13 == num14);    //Returns true

/*------------------*/

//Stric Equality ===
let num15 = 20;     //  Numeric value
let num16 = "20";   //  Numeric value in string
console.log(num15 === num16);   //Returns false

/*------------------*/
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



























