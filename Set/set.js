
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







