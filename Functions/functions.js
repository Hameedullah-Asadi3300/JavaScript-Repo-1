
        //  Functions are blocks of re-useable code
        //  Function is an object data type since it is not in primitive data type
        //  To write function, first write the keyword "function", then name of the function, parenthesis, then [] and code inside the curly brackets
        function reuseableFunction() {
            console.log("Hameedullah", "Asadi", 29, "Kabul", "Afghanistan");
        }
        //  Everything inside the [] is ran whenever the function is called
        reuseableFunction();    //  Here we called the function


        //  This is the second function
        function reuseableFunction2() {
            console.log("Hi Manizha");
        }
reuseableFunction2();
        


/*------------------------*/



        //  Passing Values to Function With Arguments
        //  Parameters are variables that acts as placeholders for the values that are to be input as function when it is called
        function person(name, lastName) //  This function has two parameters
        {
            console.log("Hello " + name + " " + lastName + ".");    //  concatenation
        }
        person("Hameedullah", "Asadi"); //  These are the values or arguments of the parmeters inside the function above
        


/*------------------------*/



        //  Second function
        function countries(Asian, European, American)
        {
        console.log("I love " + Asian + " in Asia, " + European + " in Europe, and " + American + " in Amercian contenent.");   //  concatenation 
        }
countries("Japan", "Norway", "Canada");
        


   /*------------------------*/
     



        //  Global Scope and Function - scope in funcction means visibility of the function
        //  GLOBAL SCOPE - Is written outside the function, so is accessible and can be seen everywhere in JavaScript as follows:
        var globalScope = 600;  //  This variable is outside the function so it is global
        function luckyNumber() {
            if (globalScope == 500) {                           //  if consitional statement
                console.log("This is my lucky number.");
            }
            else if (globalScope != 500) {                      //  else if conditional statement
                console.log("This is not my lucky number.");
            }
                }
luckyNumber();
        


/*------------------------*/

        

            //  Local Scope and Function - The variable that is declared within function, is called local scope variable
            //  Local scope
            function laptop()
            {
                var myFavoriteLaptop = "Dell";      //  The variable is declared within the function
                console.log("I love " + myFavoriteLaptop + " laptop computer.");
            }
            laptop();
            //  Another function
            function laptop2()
            {
                //  By running this code, we will get an error
                //  console.log(myFavoriteLaptop + " is one of my favorite laptop computer.");  //  myFavoriteLaptop is local scope so it is not accessible
            }
            laptop2();
            
            //  NOTE: It is possible for two variables with the same name, but the local variable within the function will override the global variable


/*------------------------*/


            //  Return Statement returns a value back to a calling function
                var returnValue = myFunction(10, 5);
                function myFunction(a, b)
                {
                    return a * b
                };
                console.log(returnValue);
                    /*  When the return statement is used, the function stops executing immediately
                        and rest of the code is unreachable.
                    */


/*------------------------*/



            //  Return statement example with string data type
            var returnStatement = myStringFunction("Hameedullah", "Asadi", 27, "Frankfurt");   //  All values are stored inside the returnStatement variable
            function myStringFunction(fName, lastName, age, city) {                            //  There are parameters of the values stores within the variable
                return fName + ", " + lastName + ", " + age + ", " + city;                     //    
            }
            console.log(returnStatement);       //  We call the variable which stored the values in it



/*------------------------*/


                            //  Return statement with two parameters
                        var storedValue = myJourney("Software and web Development", "JavaScript");
                        function myJourney(profession, programmingLanguage)
                        {
                            return "I choose " + profession + ", and " + programmingLanguage + " as my favorite OOP.";
                        }
                        console.log(storedValue);

                        //  Returning Boolean value from function
                        //  By using this method, we will make our code shorter
                        function booleanValue(value1, value2)
                        {
                            return value1 <= value2; 
                        }
                        console.log(booleanValue(15, 15));  //  Will return true as far as 15 is equal to 15


                        /*------------------------*/


                                //  How to assign a value inside a function to a variable?
        function myDomain()
        {
            return "I am a front-end developer."    //  The data retuned here has been assigned to a variable named "statement" down here
        }
        let statement = myDomain(); //      //  The data inside the function is assigned to variable named statement
        console.log(statement);             //  prints the assiged data or value to the variable statement


/*------------------------*/


            //  How to pass a value to function and then return it?
function myJourney(oop)
{
    return `I love my journey with ${oop}`  //  We useed openning backtik here, string, $, the value inside the {} and closing backtik
}
let oop = "JavaScript";     //  Whatever is written here, it will be concatenated with the value assigned the variable "stri". JavaScript is a value here
let str = myJourney(oop);
console.log(str);   //  prints "I love my journey with JavScript"


/*------------------------*/


//  We can also pass value more than one
//  In this function we have passed 4 values, returned them and assigned them to a variable named "statement3"
function favoriteCities(value1, value2, value3, value4) //  We have passed 4 values
{
    return `I love ${value1} ${value2} ${value3} ${value4}`     //  This is the syntax of how to assign multiple values
}
let value1 = "Califronia";                                              //Value1
let value2 = "In United states";                                        //Value2
let value3 = "and Doha";                                                //Value3
let value4 = "In Qatar.";                                               //Value4
let statement3 = favoriteCities(value1, value2, value3, value4);        //  We also passed the values here
console.log(statement3);    //  And the variable named "statement3" will print all


/*------------------------*/


//  Function Expression - ANONYMOUS FUNCTION
let addition = function(num1, num2)         //  This function does have name/anonymous, but is assigned to variable
    {
    return num1 * num2;
    }
let totalSum = addition(20, 30);    //  We assigned the addition variable which the function was assigned to, to the variable named totalSum
console.log(totalSum);  //  prints 600

//  Note: Whenever we have anonymous function, we can turn it to arrow function as in next example
/*------------------------*/


//  Arrow function - Arrow function makes the acutal syntax shorter
//Before Arrow 
let Family = function ()
{
    return `Family is the main reason for happiness.`
}
let string = Family();
console.log(string);

//  With arrow   - If the function has only statement, we can write it in only one line
//  We can not apply one line syntax in function with multiline functions
let family = () => "Family is the main reason for happiness";   //  This syntax is much shorter
let sentence = family();
console.log(sentence);


/*------------------------*/



