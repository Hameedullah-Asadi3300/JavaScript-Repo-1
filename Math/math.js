/*
The math object in JavaScript allows you to do mathematical operations on numbers.
All methods and properties of math can be used without creating a math object first.

There are 8 mathematical constancts can be accessed as math properties





*/

//  Math syntax
//Math.properties

/*
Math Method:
There are 4 common methods that round a number to an integer
Math.round()                Returns the value rounded to its nearest integer
Math.                       
Math.
Math.

*/

//  Math.round  -   Returns the nearest integere
let number1 = 30.56;
console.log(Math.round(number1));   //  Returns 31

let number2 = 10.50;
console.log(Math.round(number2));   //  Returns 11

//  Another example
console.log(Math.round(476.91));    //  Returns 477

/*-----------------*/

//  Math.ceil()     -       Returns the value rounded up to its nearest integer
let number3 = 27.01;
console.log(Math.ceil(number3));    //  Returns 28

//Another example
console.log(Math.ceil(989.1));      //  prints 990

/*-----------------*/

//  Math.floor      -       Returns the value rounded down to its nearest integere
let number4 = 45.98;
console.log(Math.floor(number4));   //  Returns 45

//Another example
console.log(Math.floor(289.98));    //  Retunrs 289

/*-----------------*/

//  Math.trunc      -       Returns the integer part of a number as a value as follows:
let number5 = 500.34;
console.log(Math.trunc(number5));

//  Another example of Math.trunc
console.log(Math.trunc(40.87));

/*-----------------*/

//Math.sign     -       Returns if the value if negative, positive or null
let number6 = -5;
console.log(Math.sign(number6));        //  Returns -1

let number7 = 88;
console.log(Math.sign(number7));        //  Returns 1

let number8 = 0;                        //Returns 0
console.log(Math.sign(number8));

let number9 = -0;
console.log(Math.sign(number9));        //  Returns -0

/*-----------------*/

//  Math.pow    -   Returns the value of x to the the power of y as follows
console.log(Math.pow(8, 2));    //  Returns 64

/*-----------------*/

//  Math.sqrt()         square root is a factor that we can multiply by itself to get a number
console.log(Math.sqrt(64)); //  Returns 8
console.log(Math.sqrt(81)); //  Returns 9

/*-----------------*/

//  MAth.abs        -       It returns an abosloute value of a negative value | It negates the negative "-" sign and returns positive number
console.log(Math.abs(-100));    //  Returns 100

/*-----------------*/

//  Math.min()      -       It is used to return the minimum value from a list
console.log(Math.min(100, 200, 400, 500));      //  Returns 100
const newArray = [100, 200, 400, 56, 90]

/*-----------------*/

//  Math.max()      -       Returns the maximum value from a list
console.log(Math.max(89, 450, 2000, 567, 890));     //  Returns 2000 as the highest value in the list

/*-----------------*/
//  Math.random()
console.log(Math.random());
