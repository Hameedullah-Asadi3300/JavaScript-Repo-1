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
