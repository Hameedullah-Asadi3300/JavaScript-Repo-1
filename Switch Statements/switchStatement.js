/*  Switch Statement - Instead of "else if" chain statement, we can use switch statement
                    To use the switch statement, the keyword "switch" is used.  */
                    function switchStatement(switchValue) {
                        var response = "";          //  This is variable in which we store the response and then compare to each case
                        switch (switchValue)
                        {
                            case 1:     
                                response = "Monday";
                                break;                      //  The break statement will stop executing rest of the code once the condition is met
                            case 2:
                                response = "Tuesday";
                                break;
                            case 3:
                                response = "Wedensday";
                                break;
                            case 4:
                                response = "Thursday";
                                break; 
                            case 5:
                                response = "Friday";
                                break;
                            case 6:
                                response = "Saturday";
                                break; 
                            case 7:
                                response = "Sunday";
                                break;
                        }
                        return response;
                    }
                    console.log(switchStatement(7));
                  
                    
                    /*  This is another example of switch statement.
                    Our cases are soccer players' numbers and want to
                    match with their names. */
                    /*  We also use a "default" option in this switch
                    statement as well.The "default" option is kind
                    of like else statement.*/
                    function myNewFunction(value4) {
                        var answer = "";
                        switch (value4)
                        {
                            case 7:
                                answer = "Cristiano Ronaldo";
                                break;
                            case 10:
                                answer = "Lionel Messi";
                                break;
                            case 20:
                                answer = "Cavani";
                                break;
                            case 11:
                                answer = "Neymar J";
                                break;
                            case 15:
                                answer = "Emanuel Nuer";
                                break;
                            case 21:
                                answer = "Zalatan";
                                break;
                            case 29:
                                answer = "Mbappe";
                                break;
                            default:
                                answer = "Please enter another number."
                                break;
                        }
                        return answer;
                    }
console.log(myNewFunction(45));     //  The default statement will run, since 45 is not listed as our case.
                    /*  Note: If "default" is not used, and the answer is something else rather than
                    our cases, then the output will be an empty strign, so it is strongly recommended
                    to use default option at the end of our switch statement.*/

                    
                            /*  Multiple Identical Options in Switch Statement
                                This is used when want multiple options to
                                return the same value   */
function identicalOptions(options) {
    var response = "";
    switch (options)
    {
        case 20:
        case 25:
        case 30:
            response = "Small size";
            break;
        case 35:
        case 40:
        case 45:
            response = "Medium size";   //  This will be returned based on the arguments we passed to the function
            break;
        case 50:
        case 55:
        case 60:
            response = "Large size";
            break;
        case 65:
        case 70:
        case 75:
            response = "Extra large";
            break;
        default:
            response = "There is no such size.";
            break;
    }
    return response;
}
console.log(identicalOptions(35));  //  Returns Medium size




