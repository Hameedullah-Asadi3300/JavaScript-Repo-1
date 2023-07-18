/*
class in JavaScript was intoduced in ES6 i 2015.
JavaScript classes are templates for JavaScript objects.
To create class, we use class keyword
The javaScript class is not an object
*/
//  Class syntax    -   This is an empty class
//  Always add a method called constrcutor() as follows:
class Class1 {                  //  Capitalize the first letter of class
    constrcutor()
    {}
}
console.log(class1);


/*----------------*/

//  This class has two properties
class MyCoding {
    constructor(language, framework)                //  This class has two parameters
    {
        this.language = language;                   //  property 1
        this.framework = framework;                 //  property 2
    }
}
console.log(MyCoding.language);

/*----------------*/

class Car {
    constructor(make, model)
    {
        this.make = make;
        this.model = model;
    }
}
    //  These two objects are created use the "Car" class
    //  The constructor() method is automatically called when an object is created
const car1 = new Car("Toyota", "Corolla");
const car2 = new Car("Ford", "Ford Explorer");
console.log(car1, car2);

/*----------------*/

//  constructor()   -   It is used to intializw the object property
//  If the constructor() method is not defined, the JavaScript will add an empty constructor method
class MobileBrands {
    constructor(brand, origin)
    {
        this.brand = brand;
        this.origin = origin;
    }
}
const mobile1 = new MobileBrands("Samsung", "South Korea");
const mobile2 = new MobileBrands("Nokia", "Finland");
console.log(mobile1);

/*----------------*/
 // Class Method    -   Needs to be rectified
// class Home {
//     constructor(type, rooms, year)
//     {
//         this.type = type;
//         this.year = year;
//     }
//     age()
//     {
//         let date = new Date();
//         return date.getFullYear() - this.year;
//     }
// }
// const home1 = new Home("Townhouse", 3, "1997");

// console.log("My " + home1.type + " is " + home1.year + " years old.");







