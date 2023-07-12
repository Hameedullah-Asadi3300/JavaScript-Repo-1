
/*  Template Literal - These are templates delimited with backtick characters, allowing for multiline srings
It is also called:
Template string
String template
Backtick syntax
*/
let templateLiteral =   //  Each prints on a new line
    `I love coding in following programming language:          
JavaScript
and CSharp.`;
console.log(templateLiteral);


/*------------------------*/


//Template literal also allows variables in string as follows:
let firstName = "Hameedullah";
let lastName = "Asadi";
let result = `My full name is ${firstName} ${lastName}.`;   //We placed variabled inside the template string so whenever the value is changed, the string is also changed automatically
console.log(result);        //  We stored all the values inside the variable named "result"
