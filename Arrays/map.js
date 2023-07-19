/*
map() method is used to iterate over the values on an array and call function on every element of the array.
*/
//  map() method returns values of an array in a new array or list

const foodArray = ["Pizza", "Donair", "Fries", "Nodel", "Sushi"];   //  Created a an array with 5 values
const storage = foodArray.map(item  => {            //  sotored the values of "foodArray" in storage them used "map" method on "foodArray", give it call back function
    return item
})

console.log(storage);   //  calls the variable named storage, which has the values of above array
//  prints [ 'Pizza', 'Donair', 'Fries', 'Nodel', 'Sushi' ]

/*--------------------*/

//  Creating an array, using map() method and multiplying the oroginal values
const mathArray = [20, 30, 50, 70];                 //  Created an array
const equals = mathArray.map(multiplication => {        
    return multiplication * 5   //  Multiplies the stored values by 5
})
console.log(equals);            //  prints [ 100, 150, 250, 350 ]

/*--------------------*/

//  creating an array, using map() method an finding sqrt of the values
const newestArray = [10, 16, 25, 36, 64];       //  Created an array of 5 values
const result = newestArray.map(square => {      //  used map method()
    return square - 5                           //  return the value with minus 5 value
})
console.log(result);        //  prints the result [ 5, 11, 20, 31, 59 ]
