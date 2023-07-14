
/*  A JavaScript set is a collection of unique values. Each value can occure once
in a set and can hold any data type.
*/
//  The following is the syntax for set. Using "new" keyword for set is must, othrwise it will throw error.
let set1 = new Set([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);    //  A simple set
console.log(set1);


//Set vs Array
/*      Set                                                                      Array
    set can't accept duplicate value                                     //  Arracy can accept duplicate value
    The values cannot be accessed by index                              //  values can be accessed using their indexes
    For not accepting duplication, each value is unique                 //  Each value is not unique 
*/

/*--------------------*/

//Methods in set with number data type
//  Add
let set2 = new Set([11, 12, 13, 14, 15, 16,]);  //Set of six values
set2.add(17);           //  Added to the end
set2.add(18);           //  Added to the end   
set2.add(19);           //  Added to the end
set2.add(20);           //  Added to the end
console.log(set2);  //Prints

/*--------------------*/
    //Add method with string
let set3 = new Set(["Hameedullah", "Asadi"]);
set3.add("Software developer");         //  Added a string to the set
console.log(set3);  

/*--------------------*/

//Creating set and adding variable
let set4 = new Set();                   //  Created an empty set
//Creating variables
let FirstName = "Hameedullah";              //  Variable 1
let LastName = "Asadi";                     //  Variable 2
let Field = "Software and Web Developer";   //  Variable 3
//Adding above variables to the list
set4.add(FirstName);                        //  Adding to the set
set4.add(LastName);                         //  Adding to the set
set4.add(Field);                            //  Adding to the set
//Prints the Set values
console.log(set4);                          //  prints all the values

/*--------------------*/

//  Value Method - It returns a new iterator object containing all the values in a set
let set5 = new Set(["Kabul", "Doha", "Riyadh", "Paris", "Tokyo"]);
//  We use iterator object to access each element in order
for (let values of set5.values())
{
    console.log(values);
    }

/*--------------------*/

//  Has Method - It checks if the value exists in the set. It returns true and false
let set6 = new Set(["Qatar", "Kuwait", "Iraq", "Egypt"])
console.log(set6.has("Kuwait"));        //  Returns true

/*--------------------*/

//Delete Method - Deletes values by the writing the value itself, not the index
let set7 = new Set([31, 32, 33, 34, 35])            //  A set of 5 values
console.log(set7.delete(35));       //  Deletes the value 35
console.log(set7);                  //  Prints Set(4) { 31, 32, 33, 34 }

/*--------------------*/

//Size Method - prints number of values in a set
let set8 = new Set([4, 14, 24, 34, 44])         //  Set of 5 values
console.log(set8.size);         //  prints 5

/*--------------------*/





