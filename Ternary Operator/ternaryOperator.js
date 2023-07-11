//  Ternary operator is used to shorten the if, else statement
/*
Condition ? statement if true : statement if false   
*/
    //  Ternry Operator
function checkFunction(num1, num2)
{
    console.log(num1 === num2 ? "The values are equal." : "The values are not equal.");
}
checkFunction(100, "100");    //  This will return "The values are not equal"

//   Multiple Condition within Ternary Operator 
/*
If there are three conditions, the last operator will be written as follows
*/
function multipleCondition(num1){
    return num1 <= 999 ? "Hundreds" : num1 <= 1000 ? "Thousands" : "Not in 10s, 100s, and 10000."
}
console.log(multipleCondition(9999));


                                    //  Complex ternary operator with && condistional sttement
function differentCondition(num5)
{
    return num5 >= 85 && num5 <= 100 ? "Top number" : num5 <= 84 && num5 >= 60 ? "Not Top number" : "You have failed"
}
console.log(differentCondition(100));   //  Prints "Top number"



