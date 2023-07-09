/*  Booleans are another data types in JavaScript which has only true and false or yes or no values
    True is on and false is off.
*/

//  Simple boolean inside the function
var bikePrice = 100;
function booleanFunction()
{
    if (bikePrice == 100)       //  If consitional statement has been used
    {
        console.log("The bike price is not correct, please see an associate.")
    }
}
booleanFunction();

//  If statement is a conditional statement used to make decision in code

/*  If statement with comparison operators
    operators        usage
    ==               Equal to
    ===              Equal value and equal type
    >                Greater than
    <                Less than
    >=               Greater than or equal to
    <=               less than or equal to
    !=               Not equal to
    !==              Not equal value or equal type
*/
//  == operator
function equality(value)    //  The "value" is the parameter
{
    if (value == 350)       //  The value is used as argument here
    {
        return "Equal"      //  Returns Equal if value is == 350
    }
    {       
        return "Not equal"  //  Return Not Equal if value is != 350
    }
}
console.log(equality(350)); //  350 is the argument we pass here

//  === Strict Equality operator
function strictEquality()
{
    if 
}







