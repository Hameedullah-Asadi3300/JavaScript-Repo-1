/*
To inherit a class in JavaScript, the keyword "extends" is used
*/
class Laptop {                                                      //  Created a class called "Laptop"
    constructor(brand)                                              //  One parameter called "brand" passed
    {
        this.brand = brand;                                         //  Added one parameter called "brand"
    }
    method1()                                                       //  created a method for class "Laptop"
    {
        return 'I love working with ' + this.brand + `.`;           //  Concatenates a string with the value of the key "brand"
    }
}
//  The following class is inherited from the above class
class Speed extends Laptop{                                         //  Created an inherited class. Speed is the inherited and Laptop is the inheriting. "extend" keyword is used to inherit
    constructor(brand, processor)                                   //  Added one propert of parent class and one property of child to the constructor
    {
        super(brand);                   //  This super() method refers to the parent class and by calling that, we get access to the parent's class and method
        this.processor = processor;     //  Added a value called "processor"
    }
    display()                           //  Added a method to the class called "Speed"
    {
        return this.method1() + ` So, I want to buy an ` + this.brand + ' laptop wih ' + this.processor + ` processor next week.`;  //  Return this.method1 returns the parent class method and then concatenates

    }
}
const laptop = new Speed("HP", "i9");           //  Created an object. The is child class "Speed" object, not the parent.
console.log(laptop.display());                  //  "laptop" is name of the object and "display" is the child class method
//  prints I love working with HP. So, I want to buy an HP laptop wih i9 processor next week.





