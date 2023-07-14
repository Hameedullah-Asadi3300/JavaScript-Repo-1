/*  For long time, the variable in JavaScript was being declared using "var" keyword,
but starting with ES6 in 2015, the keywords "let" and "const were added"
*/



    //  Var - var keyword has global scope - We can re-assign a value to var 
var userName = "Hameedullah";
console.log(userName);
//  We can assign a value twince like so:
userName = "Sarah";
console.log(userName)


    //  let - The scope is limited to block of code it is declared - let does not let us to assign a alue twice
let passCode = 1234;
console.log(passCode);
    //  We cannot assign value to the above "let" variable twice, otherwise it will give error
//  let passcode = 5678;

        //  Scope of var and let
        //"var" is accesible anywhere

function variableScope()
{
    var firstName = "Hameedullah";  //  The variable fName is assigned a value of "Hameedullah"
    if (true)
    {
        firstName = "Nabil";        //  The variable "fName is accessible and mutable outside the scope it was declared."
        console.log(firstName + ", You are the owner!");
    }
                }
variableScope()



        //"let" is accesible only within the block of code and not chanageable
function letVariable() {
    let lastName = "Asadi";
    if (true)
    {
        console.log("Your last name is " + lastName);
    }
    else if (lastName == "Hisham") {            //  We can not get access to variable lastName since it was declared using "let" keyword
        console.log("Your last name is not Asadi"); //  It still prints the first "if" condition
    }
}
letVariable();


//  const - This is another way to create a variable. "const" has all feature of let, but a read only variable
//  We can not re-assign value of "const"
const CITY = "Dubai";
// CITY = "Doha";
console.log(CITY);  //  It prints "Assignment to constant variable"



//  Const and array - The array declared using "const" keyword, is changeable with the following syntax only
const changeableArray = [100, 200, 300, 400]
changeableArray[0] = 150;       //  We changed the value referencing their indexes
changeableArray[1] = 250;
changeableArray[2] = 350;
changeableArray[3] = 450;
console.log(changeableArray);



/*  Note: using const with array and object is still not safe,
if use it with the data that we do not want them to be change.
so we use the "object.freez(Object name);"
*/

// function myFunction()
// "use strict";   //  This is used to work in strict mode with JavaScript as it parses and handles bugs
// {
//     const myObject = {
//         Phone: 12345678
//     };
//     Object.freeze(myObject);

//     try {
//         myObject = 87654321;
//     }
//     catch (ex) {
//         console.log(Message.ex);
//     }
// }
// const Phone = myFunction();







