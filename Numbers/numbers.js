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

//Extra small -
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

// + operator and string - Using + for adding a number with string results a string. It is actually called concatenation 
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

//NaN - NaN is a keyword in JavaScript indicates that a number is not a legal number.
let num9 = 100 / "grpes";
console.log(num9);  //prints NaN since we are dividing 100 by non numeric/string value

//But if the string is numeric, will result a number
let num10 = 100 / 20;
console.log(num10); //  prints 5



/*------------------*/

//isNaN - This is a global function in JavaScript used to findout if a value is not a number. It returns true and false.
let num11 = 620;
console.log(isNaN(num11));


let stringValue = "JavaScript is an object oriented programming language";
console.log(isNaN(stringValue));     //  returns true because the value assigned to the variable whih is not a number


/*------------------*/

//  NaN itself is a number and typeof NaN returns number
console.log(typeof NaN);         //Returns number

/*------------------*/

//Infinity - The infinity is a value in JavaScript which is returned if a number is calculated outside the largest number as follows:
let infin1 = 100;
while (infin1 != Infinity)  //  Infinity is keyword in JavaScript
{
    infin1 = infin1 * infin1;
}
console.log(infin1);    //returns infinity


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
//  It is good idea not to start number in JavaScript starting with 0, like 09

/*------------------*/

//.tostring()
//JavaScript by default displays numbers as base 10, but we can use .tostring() to change the base. 
let num12 = 57;
console.log(num12.toString(2)); //  prints binary equavelincy 111001

/*------------------*/

//Equality ==
let num13 = 56;         //  Numeric value
let num14 = "56";       //  Numeric value in string
console.log(num13 == num14);    //Returns true because both values are equal

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




























