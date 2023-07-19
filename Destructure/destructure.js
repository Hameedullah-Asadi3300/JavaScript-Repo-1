/*
Destructure  means extracting value/values stored in an array or object
*/

/*------------------*/

let myArray = [7, 17, 27, 37, 47];      //  Created an arry of five numeric values
//console.log(myArray);

//  Important
let destructure = [value1, value2, value3, value4, value5] = myArray;   //  We created another array and each value to one key
                                                                        //  value1 holds 7, value2 holds 17, value3 holds 27, value4 holds 37, and value4 holds 47
console.log(value1);    //  prints 7
console.log(value2);    //  prints 17
console.log(value3);    //  prints 27
console.log(value4);    //  prints 37
console.log(value5);    //  prints 47

/*------------------*/

//  Destructng string values
let newArray = ["Belgium", "Austria", "Germany", "Finland"];
//console.log(newArray);

let destructure1 = [array1, array2, array3, array4] = newArray;
console.log(array1);
console.log(array2);
console.log(array3);
console.log(array4);

/*-----------------------*/

// let myObject = {
//     FirstName: "Hameedullah",
//     LastName: "Asadi",
//     Field: "Software and web developer"
// }
// Object2(myObject);
// function object2({ FirstName, LastName, Field }) {
//     let sentence = "My name is " + FirstName + " " + LastName + ", and I am a " + Field + ".";
//     console.log(sentence);

// }






