
        //  Functions are blocks of re-useable code
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


        //  Passing Values to Function With Arguments
        //  Parameters are variables that acts as placeholders for the values that are to be input as function when it is called
        function person(name, lastName) //  This function has two parameters
        {
            console.log("Hello " + name + " " + lastName + ".");    //  concatenation
        }
        person("Hameedullah", "Asadi"); //  These are the values or arguments of the parmeters inside the function above
        

        //  Second function
        function countries(Asian, European, American)
        {
        console.log("I love " + Asian + " in Asia, " + European + " in Europe, and " + American + " in Amercian contenent.");   //  concatenation 
        }
        countries("Japan", "Norway", "Canada");
        

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

            





        




            



