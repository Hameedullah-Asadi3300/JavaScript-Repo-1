/*
The followings are set methods in JavaScript

    Method                  Description
new Set()               creates new set
add()                   Adds a new element to the set
delete()                Removes an element from a set
has()                   Returns true if value exists in a set
forEach()               Invokes a call back for each element in the set
values()                Returns an iterator with all the values in a Set

/*--------------------*/
/*  set property -  There is only one set property

property                    Description
size                     Returns the number of elements in a set
*/

/*--------------------*/

//  new Set
let set4 = new Set([]);           //  By using a "new Set" we actually created a new set

/*--------------------*/

//  add()
let set2 = new Set();           //  Created an empty set
//  Created vairable to add them to the set later on
let Make = "Toyota";
let Model = "Yaris";
let year = "2009";
//  Added already created variables to the set above
set2.add(Make);
set2.add(Model);
set2.add(year);
console.log(set2);

/*--------------------*/

//  value Method - It returns a new iterator object containing all the values in a set
let set5 = new Set(["Kabul", "Doha", "Riyadh", "Paris", "Tokyo"]);
//  We use iterator object to access each element in order
for (let values of set5.values())
{
    console.log(values);
    }

/*--------------------*/

//  has Method - It checks if the value exists in the set. It returns true and false
let set6 = new Set(["Qatar", "Kuwait", "Iraq", "Egypt"])
console.log(set6.has("Kuwait"));        //  Returns true

/*--------------------*/

//delete Method - Deletes values by the writing the value itself, not the index
let set7 = new Set([31, 32, 33, 34, 35])            //  A set of 5 values
console.log(set7.delete(35));       //  Deletes the value 35
console.log(set7);                  //  Prints Set(4) { 31, 32, 33, 34 }

/*--------------------*/

//size property - prints number of values in a set
let set8 = new Set([4, 14, 24, 34, 44])         //  Set of 5 values
console.log(set8.size);         //  prints 5

/*--------------------*/