/* It is possible to face errors when running code. Errors can occur due to
wrong input, caused while coding and other things.

1. try - The "try" statement defines a block of code to run (to try).
2. catch - The "catch" statement defines a code block to handle any error.
3. throw - The "throw" statement defines a custom error.
4. finally - The "finally" defines a code block to run regardless of the result.

*/
//  try and catch comes/used in pair.
try {
    console.log("Welcome to coding session.");
    university;         //  This is the error, because we never defined that. Once The error occurs, the catch block will start working.
    console.log("This is my try block.");   //  This will nun upon catcing the error. Once error detected, rest of the try block code stops executing.
}
catch (err) {
    console.log("An error has occured " + err);     //  This string prints then
}
finally {
    console.log("please choose the right package of coding");
}

/*-------------------*/

//  throw - The throw statement allows us to throw a custom error
let myVariable = "Hameedullah";     //  We set a variable with string assined, but we actually want here a number
try {
    if (isNaN(+myVariable)) {                       //  We mean if the variable "myVariable" is not a number...
        throw new Error("This is not a number!");   //  Then throw this error
}
    console.log("My nymer is " + myVariable);       //  If the variable was assigned a number, then this will print
}
catch(err) {                //  Catch block
    console.log(err);
}
finally {
    console.log("Please enter a valid number!");    //  The "finally" block will run anyway regardless of the result
}

/*-------------------*/

//Error Object - JavaScript has a built-in error object that provides error information when an error occurs
/*
The error object provides two useful properties: (name and object)
There are six values of errow object in JavaScript as follows:
    ErrorName                                        Description
1. EvalError                                Newer version of JavaScript does not throw EvalError, instead throws SyntaxError               
2. ReferenceError                           Is thrown if a referenced variable (reference) is not declared 
3. SyntaxError                              Is thrown if there is a syntax error in block of code
4. URIError(Uniform Resource Identifier)    Is thrown if an illegal character is used in URI function
5. TypeError                                Is thrown if a value is used outside the outside the range of expected types
6. RangeError                               Is thrown if a number is outside the range defined
*/

/*-------------------*/

//Range Error 
let range = 2;      //  We defined the range of this variable
try {
    range.toPrecision(500);     //  But we used a number outside the range
}
catch(err) {                //  Catch block
    console.log(err);       //  Throws   -   RangeError: toPrecision() argument must be between 1 and 100
}

/*-------------------*/

//ReferenceError
let num1 = 10;                      //  We declared only one variable
try {
    console.log(num1 + num2);       //  The num 2 has not been declared
}
catch (err) {           //Catch block
    console.log(err)    //Throws             ReferenceError: num2 is not defined
}

/*-------------------*/

//SyntaxError
let num3 = 100;         //  A variable declared 
try {
    console.log(num3  " is my favorite number");    //  the + operator has been removed
}
catch (err) {
    console.log(err);       //  throws  SyntaxError: missing ) after argument list
}

/*-------------------*/
