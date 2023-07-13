//Object Constructor function
/*
Sometimes we need a blueprint of our blue print for
creating many objects of the same type, so that is when 
we use OBJECT CONSTRUCTOR FUNCTION.
*/
/*  Note: To make it easy to identify object constructor function, it is good practice
to write first letter of the function with the capital letter
*/


function Cars(make, model, year)        //  This object constructor function has 3 parameters
{
    this.Make = make;       //  Property
    this.Model = model;     //  Property
    this.Year = year;       //  Property
}
//  Created 3 objects of Cars
//  Each time we create an object, a new keyword is used
let Car1 = new Cars("Toyota", "Corolla", 2022);     //  Object1
let Car2 = new Cars("Honda", "Civic", 2021);        //  Object2
let Car3 = new Cars("Mazda", "Mazda5", 2020);       //  Object3
console.log(Car1);  //  prints Car1
console.log(Car2);  //  Prints Car2
console.log(Car3);  //  Prints Car3


//  Object constructor function
function Laptops(brand, processor, year)    //  Created a constructor named "Laptops" with 3 parameters
{
    this.Brand = brand;                     //  Properrty
    this.Processor = processor;             //  Properrty
    this.Year = year;                       //  Properrty
}
let laptop1 = new Laptops("HP", "i7", 2022);            //  Object 1 named laptop1        
let laptop2 = new Laptops("Dell", "i8", 2023);          //  Object 2 named laptop2
let laptop3 = new Laptops("acer", "i5", 2020);          //  Object 3 named laptop3
console.log(laptop1);       //  prints laptop1
console.log(laptop2);       //  prints laptop2
console.log(laptop3);       //  prints laptop3