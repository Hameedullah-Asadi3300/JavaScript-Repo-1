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

            //  === Strict Equality operator checks for if both are common data types
            function stritctEquality(val)
            {
                if (stritctEquality === 10)
                {
                    console.log("This is true!")
                }
                console.log("This is not true");
            }
stritctEquality(10);
            

                //  Strict equality another example
            function myFunction(a, b) {
                if (a === b) {
                    return "Equal";
                }
                return "Not Equal";
            }
            console.log(myFunction(10, "10"));  /*  Since the second value is inside the "", it will return not equal since
                                                    it is not being converted.*/


            //  !=  Inequality operator
                function inequalityOperator(inequalValue)
                            {
                    if (inequalValue != 35)
                    {
                        console.log("True!");
                    }
                    {
                        console.log("Not true!");
                    }
                }
inequalityOperator(27);
                    
                

                    //  !==   Comparison With the Strict Inequality operator. This is opposite of the equality operator
                function strictComparison(comparisonValue)
                    {
                    if (comparisonValue !== 20)
                    {
                        console.log("This is true");
                    }
                    {
                        console.log("This is not true");
                    }
                    }
strictComparison(20);
                                

                //  > Comaprison with the greater than operator
                function greatherThanOperator(value1) {
                    if (value1 > 100)
                        {
                        return "The number is over 100";
                        }
                    if (value1 > 10)
                        {
                        return "This number is over 1";
                        }
                }
console.log(greatherThanOperator(110));
                            

                //  >= Greater than or equal to operator
                function greatherThanOrEqualTo(value2) {
                    if (value2 >= 200)
                    {
                        return "This number is equal to or over 200";
                    }
                    else
                    {
                        return "The number is not equal to nor over 200."
                        }
                }
console.log(greatherThanOrEqualTo(199));
                            

                    //  < Less than Comparison Operator
                    function lessThanOperator(lessValue) {  //  This function ahs only one parameter
                        if (lessValue < 500)        //  We are passing the parameter in which we stored the value
                        {
                            return "This number is less than 500.";
                        }
                        else {
                            return "This number is not less than 500.";
                        }
                    }
                    console.log(lessThanOperator(499)); //  We are passing the value to check if it is less than 500
                                    

                        //  Comparison With the Logical AND && Operator. Two && "Ampersand" is used in order to this operation
                    function logicalAndOperator(andLogic) {
                        if (andLogic >= 400 && andLogic <= 500)     //  We are checking if these two things are true at the same time
                        {
                            return "The number is between 400 and 500.";
                        }
                        else {
                            return "The number is not between 400 and 500.";
                        }
                    }
console.log(logicalAndOperator(401));       //  The && operator checks if both conditions are right, it will return true, and if one of them or wrong, it will return the opposite.


                    //  || Comaparison with "or" operator. It checks if one or either condition is right, it will return true.
                function orComparison(orLogic) {
                    if (orLogic == 100 || orLogic < 200)
                    {
                        return "The number is between 100 and 200.";
                    }
                    else {
                        return "The number is not between 100 and 200.";
                    }
                }     
console.log(orComparison(99));
                                    

                                /*  else statement - If the "if" statement is true, the block of code within "if" is evaluated.
                                    if the "if is not true, nothing will happen, but with the "else" statement, the alternate
                                    block of code is executed as follows:*/
                function elseStatement(firstName) {
                    if (firstName == "Hameedullah")
                    {
                        return "You are Hameedullah and you have admin right in the system.";   //  This is the if statement
                    }    
                    else {
                        return "You are not Hameedullah and you do not have admin right in the system.";    //  This is the else statement
                    }
                }
                console.log(elseStatement("Sulaiman"));  // By writing other name rather than "Hameedullah", the else statement will run.


                            /*  Else if statement - This is used when we have
                            multiple conditions need to be addressed.
                            The following function had multiple conditions*/
                    function elseIfStatement(passcode, position) {
                        if (passcode == "Asia0110")
                        {
                            console.log("You have admin right in the system.");
                        }
                        else if (position == "System Administrator")    //  This is else if statement and will run as we pass the parameter
                        {
                            console.log("The permission is granted, please enter to the system.");
                        }
                        else
                        {
                            console.log("You do not have right to enter the system.");
                            }
                    }
console.log(elseIfStatement("Asia0110", "System Administrator"));   //  We passed two arguments or values for passcode and position
            /*  Note: Order in else if statement is very
            important and the argument should be passed based
            on order of the parameters. And once the first 
            condition is met, it will not check rest of the
            conditions.*/
            
        //  Chsining if else statement
        //      In this code style, it can take less space
                function clothesSize(size) {
                    if (size <= 30) { return "Kids size!" }
                    else if (size == 30 || size <= 40) { return "Teenagers size!" }
                    else if (size < 41  || size <= 45) { return "Small size!" }   
                    else if (size == 46 || size <= 50){return "Medium size!"}
                    else if (size >= 51 || size <= 60){return "Large size!"}
                    else {
                        return "Extra large!"
                    }
                }
console.log(clothesSize(63));   //  It will return "Extra Large!" as part of else statement
                
                    
                                                
                            

                                    
            








