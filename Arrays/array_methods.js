/*
  Array is a special variable which can hold more than 1 value.
*/
//  Example
const car = ["Ford", "Ford Explorer", 2023]
console.log(car);
  
/*---------------*/
/*Aray Methods
Method                                          Description
toString()                          Returns an array as string with comma as seperator
length()                            Returns length of an array
pop()                               Deletes the last value
shift()                             Deletes the very first value
Unshift()                           Adds a value at the first with index 0
deletd()                            Remove a value from an array
slice()                             Slices part of an array/values into a new array
splice()                            Removes values without leaving holes/undefined in an array       
flat()                              reduces the dimensionality/nested of nsested array
concat()                            concat method concatenates two arrays
*/



//  toString 

const array1 = ["Hameedullah Asadi", "JavaScript Developer", 27]
console.log(array1.toString());    //  Returns Hameedullah Asadi,JavaScript Developer,27

/*---------------*/
//  lenght
const districtNumber = [41, 42, 43]
console.log(districtNumber.length); //  Returns 3 as there are thre values in this array

/*---------------*/
const laptops = ["HP", "Dell", "acer", "Mac"]   //  Contains 4 values
laptops.pop();  //  The last value "Mac" has been removed
console.log(laptops);

/*---------------*/
//  push
let carMakes = ["Toyota", "Honda", "Hyundai"]
carMakes.push("BMW");       //  Tesla has been added as a last value of the array
carMakes.push("Tesla");     //  We can push multiple values to the array
carMakes.push("Ford");      //  We can push multiple values to the array
console.log(carMakes);      //  [ 'Toyota', 'Honda', 'Hyundai', 'BMW', 'Tesla', 'Ford' ]

/*---------------*/
//  Shift
const fruits = ["Mango", "Banana", "Apple"]
fruits.shift(); //  The first value "Mango" has been removed
console.log(fruits);    //  prints [ 'Banana', 'Apple' ]

/*---------------*/
//  Unshift
const carModels = ["Corolla", "Civic", "Mazda 5"]
carModels.unshift("Yaris");         //  The syntax is different
console.log(carModels);             //  Returns [ 'Yaris', 'Corolla', 'Civic', 'Mazda 5' ]

/*---------------*/

//  concat Array Merging -   This is not nested array, but two seperate arrays
const carMakes2 = ["Toyota", "Mazda", "Honda"]
const carModels2 = ["Yaris", "Masdza 5", "Civiv"]
const merging = carMakes2.concat(carModels2);
console.log(merging);       //  prints [ 'Toyota', 'Mazda', 'Honda', 'Yaris', 'Masdza 5', 'Civiv' ]


//Merging 3 Arrays
const firstNames = ["Sulaiman", "Salman"]
const lastNames = ["Mahmood", "Ehsas"]
const ages = [21, 22]
console.log(firstNames.concat(lastNames, ages))

/*---------------*/
//  flat()  reduces the dimensionality/nested of nsested array
const firstArray = [
    ["JavaScript", "React"],
    ["CSS", "Bootstrap"],
    ["CSharp", ".Net Frameworkd"],
]
console.log(firstArray.flat());
/*
Returns

'JavaScript',
'React',
'CSS',
'Bootstrap',
'CSharp',
'.Net Frameworkd'
]
*/

/*---------------*/
//  Slice()
let mobileDevices = ["Samsung", "LG", "Motrolla", "iPhone"]
console.log(mobileDevices.slice(1));    //  It creates a new rrray starting from index 1. It does not remove any value

//  Selecting multiple values based on their indexes
const internetGeneration = ["3G", "4G", "5G", "6G", "7G"]
console.log(internetGeneration.slice(1, 4));    //  It only makes an array from values with index 1, 2, 3
//prints [ '4G', '5G', '6G' ]

/*---------------*/

//  splice()
const luckyNumber = [24, 76, 95, 34, 19, 58, 45]
console.log(luckyNumber.splice(0, 3));  //  The first parameter (0) defines that where a new element should be added, and the second parameter (3) defines that ow many elements should be removed
console.log(luckyNumber);   //  prints [ 34, 19, 58, 45 ]



