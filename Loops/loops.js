//Loops allow you to run the same code multiple times until the specific condition is met
//There are 3 type of loops: While loop, do while loop and for loop

/*
To do whule loop, we need 3 things:
1.  initialization
2.  condition or Counter - How many times we want to iterate a block of code
3.  increment
*/

//  While Loop - loops through a block of code as long as speicified condition is true

//  While loop iterates string data type
var i = 1;  //  This is intialization
while (i <= 10)     //  This is condition that we set
{
    console.log("Hello, welcome to while loop in JavScript");   //  This code will iterates 10 times
    i++;    //  And this is incrementing by 1
}
    

//  While loop iterates number data type
var loopArray = [];

var i = 1;
while (i <= 5)
{
    loopArray.push(i);
    i++;
}
console.log(loopArray);
                            //  While loop first checks for the condition and then execute the block
    //  While Loop - Decrement - To decrement the value, we need to do as follows:
var i = 5;                          //  We initializied the loop which starts from 5
while (i >= 0)                      //  It will stop while it reaches 0 in index
{
    console.log("Hi", i);           //  It will print "Hi 5, Hi 4, Hi 3, Hi 2, Hi 1, Hi 0"
    i--;                            //  It the decrements the value by 1
    }

    //  Do While Loop - The do while loop first executes the condition and then checks for the condition
            var i = 1;      //  This is intialization of our loop
            do              //  It says go to the code inside the {}
            {
                console.log("Hello " + i); //  Print "Hello 1"
                i++;                       //  Increments the value by 1
            }
while (i <= 3);     //  Prints at least one
            

            //  Do while loop with string data type
            var i = 1;
            do {
                console.log("Hello, I am a software developer!");
                i++;
            }
while (i <= 5);

//  For loop - In for loop we can write all 3 conditions in just one line as follows:
for (var i = 1; i <= 5; i++)    //  All 3 initialization, condition and incremention are in one line
{
    console.log("Hey, I am a web developer!");
}

/*  Nested For Loop  - This neted for loop will print one teim "Hi, and then five times
"I am software developer!". again one time "Hi", and then five times "I am a software developer"
and goes one.
*/
for (var i = 1; i <= 5; i++)        //This is the first loop
{
    console.log("Hi, ")
    for (var j = 1; j <= 5; j++)    //This is the second loop
        console.log("I am a software developer!");  
}

    //  For Loop and incremention by 2
    var myArray = []
for (var i = 1; i <= 10; i += 2)    //  This is wil increment the value by 2. We can choose any number we want
    myArray.push(i);        //  We are adding the value into the array
{
    console.log(myArray); //  The output is 1, 3, 5, 7, and 9
}

//  Loop through an array and add the values
var loopArray = [15, 25, 35, 45, 55, 65, 75, 85, 95,]
var total = 0;
for (var i = 0; i < loopArray.length; i++)
{
    total += loopArray[i];
}
    console.log(total)



    








