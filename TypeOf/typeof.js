//These five data types can contain values:
/*
1. String
2. Number
3. Boolean
4. Object
5. Functions
*/
            //  And there are 6 types of objects
                /*
                1. string
                2. Number
                3. Date
                4. Array
                5. Boolean
                6. Objects
                */
//These Two Types can not contain value
/*
1. null
2. undefined
*/


                    //  The typeof operator in JavaScript returns one of the followings data types
                    /*
                            1. string
                            2. number
                            3. boolean
                            4. object
                    */

//  Typeof Operator - The "typeof" operator is used to specify the data type of variables in JavaScript programming languages
//  String
let demo1 = "I am a sfotware devloper.";
console.log(typeof demo1);               //  Prints string

//  Number
let demo2 = 700600;
console.log(typeof demo2);  

//  Boolean
let demo3 = false;          
console.log(typeof demo3);

// Array - In JavaScript the data type of array is object
let myArray = ["JavaScript", "React"]
console.log(typeof myArray);

//  Function
function newFunction() {
    console.log();
}
console.log(typeof newFunction);

//  Undefined - The data type of unefined is undefined
let demo4;
console.log(typeof demo4)

//  null - The data type of null is object - In JavaScript, the array is nothing, it is supposed to be somethinf that does not exist
let demo5 = null;
console.log(typeof demo5);
//  NOTE: null and undefined are equal in value, but different i data type. null is object, and undifened is undefined data type

//  NOTE: "typeof" itself is not data type, but it is an operator like (+,/*,-). Operators do not have data types, they are operators
