
//  The "break" in javaScript breaks the loop execution as follows:
for (let i = 0; i < 10; i++)
{
    if (i === 6) { break; }
    var text = ("The number is " + i + "<br>");
    console.log(text);
}

//  The "break" statement can also stop executing switch statement as follows:
/*  //In this example, we used the break statement in switch statement within
a function. If one of the case matches, the entire stich statement will stop
executing.
*/
function breakStatement(value)      //  A function and a parameter passed named "value"
{
    let marks = "";                 //  The variable with empty value assigned for cases
    switch (value)                  //  Switch statement with a parameter passing to the function
    {
        case 100:   //  Case
            marks = "The most top number!";  //  Prints if the the case matches
            break;                          //  Breaks the statement
        case 90:    //  Multiple cases                           
        case 89:
        case 88:
        case 87:
        case 86:
            marks = "Top number!";
            break;
        case 80:
            marks = "Good number!";
            break;
        case 70:
            marks = "Not bad!";
            break;
        case 60:
            marks = "passed!";
            break;
        case 49:
            marks = "failed!";
            break;  
        default:                            //  The default is used at the end and prints if none of the case matches
            marks = "Please enter your marks in correct order!";   //  Prints if none of the above cases match
            break;          //  Will break here
    }
    return marks;   //  Returning all the values
}
console.log(breakStatement(100));    //  prints the argument passed to the function



//  Continue statement breaks the 1 teration while the condition is met, and will continue with the next iteration in the loop
for (let i = 0; i < 15; i++)        //  a avriable "i" is intilized, the condition is set and the icremention is done
{
    if (i === 3) { continue; };                         //  Set the condition of "i" strict equals to 3, the "continue" statement will break the 3
    var sentence = ("The number is " + i + "<br>");     //  Concatenates and generates a new line
    console.log(sentence);                              //  prints all the values except 3
}


        //  Continue statement another example
for (let i = 0; i <20; i++)
{
    if (i === 10) { continue; }
    var sampleSentence = ("The value is " + i + "<br>");
    console.log(sampleSentence);
}


    //  JavaScript labels
    /*  JavaScript lables are the identifiers used with "break" and "continue" statement 
        and will jump directly to the label while a statement is broken or continued.
        The identifier for labels can be anything except keyworkds.
    */
loop1:                                                  //  This is the name label with the same syntax
for (let i = 0; i < 10; i++)                            //  Initizliaed, set the conditio, and incrmeneted
{
    if (i === 5) { break loop1; }                       //  Set the condition and will break in iteration 5 and then will break to label "loop1"
    let number = ("The number is " + i + "<br>");       //  Concatenates
    console.log(number);                                //  Prints the string
}




